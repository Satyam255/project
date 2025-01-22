"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Code2, Users, GitPullRequest } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">HackMatch</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/teams">
            <Button variant={pathname === "/teams" ? "default" : "ghost"}>
              <Users className="mr-2 h-4 w-4" />
              Find Team
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant={pathname === "/projects" ? "default" : "ghost"}>
              <GitPullRequest className="mr-2 h-4 w-4" />
              Projects
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}