"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const skills = [
  "Frontend",
  "Backend",
  "Mobile",
  "UI/UX",
  "DevOps",
  "Machine Learning",
];

const interests = [
  "Web3",
  "AI/ML",
  "Social Impact",
  "Healthcare",
  "Education",
  "Gaming",
];

export default function TeamFilter() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Skills</h3>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox id={`skill-${skill}`} />
              <Label htmlFor={`skill-${skill}`}>{skill}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Interests</h3>
        <div className="space-y-3">
          {interests.map((interest) => (
            <div key={interest} className="flex items-center space-x-2">
              <Checkbox id={`interest-${interest}`} />
              <Label htmlFor={`interest-${interest}`}>{interest}</Label>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
    </div>
  );
}