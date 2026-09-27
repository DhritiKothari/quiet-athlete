import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      aria-label="Projects"
      className={`absolute inset-y-0 left-0 z-20 flex w-72 flex-col border-r bg-sidebar text-sidebar-foreground shadow-2xl transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      inert={!isOpen}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b px-4">
        <h2 className="text-sm font-semibold">Projects</h2>
        <Button
          aria-label="Close projects sidebar"
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <X aria-hidden="true" />
        </Button>
      </div>

      <Tabs className="min-h-0 flex-1 gap-4 p-4" defaultValue="my-projects">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent
          className="flex items-center justify-center py-8 text-center text-sm text-muted-foreground"
          value="my-projects"
        >
          No projects yet.
        </TabsContent>
        <TabsContent
          className="flex items-center justify-center py-8 text-center text-sm text-muted-foreground"
          value="shared"
        >
          No shared projects yet.
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t p-4">
        <Button className="w-full" type="button">
          <Plus aria-hidden="true" data-icon="inline-start" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
