"use client";

import type { WindowState } from "./types";
import { useWindowDrag } from "./window/useWindowDrag";
import WindowTitleBar from "./window/WindowTitleBar";
import WindowToolbar from "./window/WindowToolbar";
import WindowNavBar from "./window/WindowNavBar";

interface WindowProps {
  window: WindowState;
  isActive: boolean;
  onFocus: (id: string) => void;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onMove: (id: string, position: { x: number; y: number }) => void;
  onResize: (
    id: string,
    size: { width: number; height: number },
    position: { x: number; y: number },
  ) => void;
  children: React.ReactNode;
}

const RESIZE_EDGES = [
  {
    edge: "nw",
    className: "absolute top-0    left-0    w-3 h-3 cursor-nw-resize",
  },
  {
    edge: "ne",
    className: "absolute top-0    right-0   w-3 h-3 cursor-ne-resize",
  },
  {
    edge: "sw",
    className: "absolute bottom-0 left-0    w-3 h-3 cursor-sw-resize",
  },
  {
    edge: "se",
    className: "absolute bottom-0 right-0   w-3 h-3 cursor-se-resize",
  },
  {
    edge: "n",
    className: "absolute top-0    left-3 right-3  h-1 cursor-n-resize",
  },
  {
    edge: "s",
    className: "absolute bottom-0 left-3 right-3  h-1 cursor-s-resize",
  },
  {
    edge: "w",
    className: "absolute left-0   top-3  bottom-3 w-1 cursor-w-resize",
  },
  {
    edge: "e",
    className: "absolute right-0  top-3  bottom-3 w-1 cursor-e-resize",
  },
];

export default function Window({
  window: win,
  isActive,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onMove,
  onResize,
  children,
}: WindowProps) {
  const { onTitleMouseDown, onResizeHandleMouseDown, onTitleDoubleClick } =
    useWindowDrag({
      win,
      onMove,
      onResize,
      onFocus,
      onMaximize,
    });

  if (win.isMinimized) return null;

  const isMax = win.isMaximized;
  const outerStyle: React.CSSProperties = isMax
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "calc(100vh - 48px)",
        zIndex: win.zIndex,
      }
    : {
        position: "fixed",
        top: win.position.y,
        left: win.position.x,
        width: win.size.width,
        height: win.size.height,
        zIndex: win.zIndex,
      };

  return (
    <div
      style={outerStyle}
      className={`flex flex-col select-none overflow-hidden ${isMax ? "" : "rounded-lg"} ${isActive ? "shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.07)]" : "shadow-[0_4px_16px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04)]"}`}
      onMouseDown={() => onFocus(win.id)}
    >
      {!isMax &&
        RESIZE_EDGES.map(({ edge, className }) => (
          <div
            key={edge}
            className={`${className} z-20`}
            onMouseDown={(e) => onResizeHandleMouseDown(e, edge)}
          />
        ))}

      <WindowTitleBar
        icon={win.icon}
        title={win.title}
        isActive={isActive}
        isMaximized={isMax}
        onMouseDown={onTitleMouseDown}
        onDoubleClick={onTitleDoubleClick}
        onClose={() => onClose(win.id)}
        onMinimize={() => onMinimize(win.id)}
        onMaximize={() => onMaximize(win.id)}
      />
      {win.appId !== "resume" && win.appId !== "about" && (
        <WindowNavBar icon={win.icon} title={win.title} />
      )}
      {win.appId !== "resume" && win.appId !== "about" && <WindowToolbar />}

      <div
        className="flex-1 flex"
        style={{
          background: "#1e1e1e",
          overflow: "hidden",
          minWidth: 0,
          minHeight: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
