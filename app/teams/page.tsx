import { Card } from "@/components/ui/card";
import TeamList from "./team-list";
import TeamFilter from "./team-filter";

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Find Your Team</h1>
          <p className="text-muted-foreground">
            Connect with developers who share your interests and complement your skills
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <Card className="p-4 lg:col-span-1 h-fit">
          <TeamFilter />
        </Card>
        <div className="lg:col-span-3">
          <TeamList />
        </div>
      </div>
    </div>
  );
}