"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teams = [
  {
    id: 1,
    name: "Web3 Innovators",
    description: "Building a decentralized marketplace for digital artists",
    members: [
      { name: "John D.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=80" },
      { name: "Sarah K.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80" },
    ],
    skills: ["Frontend", "Smart Contracts", "UI/UX"],
    interests: ["Web3", "Art"],
    openRoles: ["Backend Developer", "DevOps Engineer"],
  },
  {
    id: 2,
    name: "AI Health Assistant",
    description: "Developing an AI-powered health monitoring system",
    members: [
      { name: "Mike R.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=80" },
    ],
    skills: ["Machine Learning", "Backend"],
    interests: ["Healthcare", "AI/ML"],
    openRoles: ["Frontend Developer", "UI/UX Designer", "ML Engineer"],
  },
];

export default function TeamList() {
  return (
    <div className="space-y-6">
      {teams.map((team) => (
        <Card key={team.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
              <p className="text-muted-foreground mb-4">{team.description}</p>
            </div>
            <Button>Join Team</Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {team.skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {team.members.map((member) => (
                <Avatar key={member.name} className="border-2 border-background">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Looking for: {team.openRoles.join(", ")}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}