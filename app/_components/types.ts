export type AppId = "about" | "projects" | "blog" | "contact" | "resume";

export interface AppConfig {
  id: AppId;
  title: string;
  icon: string;
  defaultSize: { width: number; height: number };
  defaultPosition: { x: number; y: number };
}

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export const APPS: AppConfig[] = [
  {
    id: "about",
    title: "About Me",
    icon: "👤",
    defaultSize: { width: 860, height: 560 },
    defaultPosition: { x: 100, y: 60 },
  },
  {
    id: "projects",
    title: "Projects",
    icon: "📁",
    defaultSize: { width: 900, height: 600 },
    defaultPosition: { x: 120, y: 70 },
  },
  {
    id: "blog",
    title: "Blog",
    icon: "📁",
    defaultSize: { width: 880, height: 580 },
    defaultPosition: { x: 110, y: 65 },
  },
  {
    id: "contact",
    title: "Contact",
    icon: "✉️",
    defaultSize: { width: 820, height: 560 },
    defaultPosition: { x: 130, y: 70 },
  },
  {
    id: "resume",
    title: "Resume",
    icon: "📄",
    defaultSize: { width: 900, height: 620 },
    defaultPosition: { x: 115, y: 60 },
  },
];
