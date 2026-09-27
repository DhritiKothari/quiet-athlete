"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

interface EditorShellProps {
  children: ReactNode;
}

export function EditorShell({ children }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-background">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((isOpen) => !isOpen)}
      />
      <div className="relative flex min-h-0 flex-1">
        <div className="relative flex min-h-0 flex-1">{children}</div>
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </main>
  );
}
