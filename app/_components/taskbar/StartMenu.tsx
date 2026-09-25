"use client";

import { useEffect, useRef, useState } from "react";
import type { AppId } from "../types";
import { APPS } from "../types";

const TILE_COLORS: Record<string, string> = {
  about: "rgba(0,120,212,0.9)",
  projects: "rgba(16,124,16,0.9)",
  blog: "rgba(136,0,37,0.9)",
  contact: "rgba(0,99,177,0.9)",
  resume: "rgba(93,47,151,0.9)",
};

const RECOMMENDED = [
  {
    name: "About Me",
    subtitle: "Recently opened",
    appId: "about" as AppId,
    icon: "👤",
  },
  {
    name: "Resume",
    subtitle: "Recently opened",
    appId: "resume" as AppId,
    icon: "📄",
  },
  {
    name: "Projects",
    subtitle: "2h ago",
    appId: "projects" as AppId,
    icon: "💼",
  },
  { name: "Blog", subtitle: "5h ago", appId: "blog" as AppId, icon: "📝" },
];

const ChevronRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M4.5 2.5l4 3.5-4 3.5" />
  </svg>
);

interface Props {
  onOpen: (appId: AppId) => void;
  onClose: () => void;
}

export default function StartMenu({ onOpen, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  const filteredApps = search.trim()
    ? APPS.filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
    : APPS;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const t = setTimeout(
      () => document.addEventListener("mousedown", handler),
      50,
    );
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", handler);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="fixed z-[10000]"
      style={{
        bottom: 52,
        left: "50%",
        transform: "translateX(-50%)",
        width: 520,
        maxHeight: "calc(100vh - 64px)",
      }}
    >
      <div
        className="rounded-xl overflow-y-auto flex flex-col max-h-[calc(100vh-64px)]"
        style={{
          background: "rgba(32,32,32,0.97)",
          backdropFilter: "blur(60px) saturate(200%)",
          WebkitBackdropFilter: "blur(60px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
        }}
      >
        {/* Search */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-center gap-3 h-10 px-4 rounded-full border border-white/15 bg-white/[0.07] focus-within:border-[#0078d4] transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-white/45 shrink-0"
            >
              <circle cx="9" cy="9" r="6" />
              <path d="M15 15l3.5 3.5" />
            </svg>
            <input
              type="text"
              placeholder="Search for apps, settings, and documents"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-white/35"
              aria-label="Search"
              autoFocus
            />
          </div>
        </div>

        {/* Pinned */}
        <div className="px-5 pb-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] font-semibold text-white">Pinned</span>
            <button className="flex items-center gap-1 text-[12px] text-white/50 hover:text-white/80 transition-colors px-2 py-0.5 rounded hover:bg-white/[0.08]">
              All apps <ChevronRight />
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "4px",
            }}
          >
            {filteredApps.map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  onOpen(app.id);
                  onClose();
                }}
                className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors group"
              >
                <div
                  className="flex items-center justify-center text-2xl leading-none shadow-md"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: TILE_COLORS[app.id] ?? "rgba(60,60,60,0.9)",
                  }}
                >
                  {app.icon}
                </div>
                <span className="text-[11px] text-white/65 group-hover:text-white transition-colors text-center leading-tight w-full truncate px-0.5">
                  {app.title}
                </span>
              </button>
            ))}
          </div>
          {search.trim() && filteredApps.length === 0 && (
            <p className="text-[12px] text-white/30 text-center py-4">
              No results for &ldquo;{search}&rdquo;
            </p>
          )}
        </div>

        {/* Recommended */}
        {!search.trim() && (
          <div className="px-5 pt-2 pb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-semibold text-white">
                Recommended
              </span>
              <button className="flex items-center gap-1 text-[12px] text-white/50 hover:text-white/80 transition-colors px-2 py-0.5 rounded hover:bg-white/[0.08]">
                More <ChevronRight />
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2px",
              }}
            >
              {RECOMMENDED.map(({ name, subtitle, appId, icon }) => (
                <button
                  key={name}
                  onClick={() => {
                    onOpen(appId);
                    onClose();
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-left group"
                >
                  <div
                    className="shrink-0 flex items-center justify-center text-lg"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.1)",
                      overflow: "hidden",
                    }}
                  >
                    {icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[12px] text-white/85 group-hover:text-white truncate leading-tight">
                      {name}
                    </span>
                    <span className="text-[11px] text-white/35 leading-tight mt-0.5">
                      {subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-white/10 transition-colors group">
            <div
              className="shrink-0 flex items-center justify-center text-[13px] font-bold text-white"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0078d4, #60cdff)",
              }}
            >
              BM
            </div>
            <span className="text-[13px] text-white/80 group-hover:text-white">
              Bryan Mayodi
            </span>
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white/55 hover:text-white"
            aria-label="Power"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M8 1.5v5" />
              <path d="M5 3.2A6 6 0 1 0 11 3.2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
