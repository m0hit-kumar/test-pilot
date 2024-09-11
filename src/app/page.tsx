"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDialog } from "@/components/ProjectDialog";
import { useState } from "react";

export default function Home() {
  const [projectList, setProjectList] = useState([]);
  return (
    <div>
      <main className="flex-1 bg-muted/40 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <ProjectDialog />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {true ? (
            projectList.map((i) => <ProjectCard key={i} />)
          ) : (
            <div className="flex absolute     right-0 left-0 flex-col items-center gap-4">
              <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-primary">
                <PlusIcon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-primary">Lets make a project</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
