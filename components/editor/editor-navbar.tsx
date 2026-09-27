import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="grid h-14 shrink-0 grid-cols-3 items-center border-b bg-background px-4">
      <div className="flex items-center">
        <Button
          aria-label={isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar"}
          onClick={onToggleSidebar}
          size="icon"
          variant="ghost"
        >
          <SidebarIcon aria-hidden="true" />
        </Button>
      </div>
      <div aria-hidden="true" />
      <div />
    </header>
  );
}
