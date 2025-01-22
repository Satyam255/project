import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Users, GitPullRequest, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Find Your Perfect Hackathon Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with like-minded developers, form teams based on skills and interests,
          and track your project progress all in one place.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="p-6">
          <Users className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Team Formation</h3>
          <p className="text-muted-foreground">
            Find teammates that complement your skills and share your interests using our
            advanced matching algorithm.
          </p>
        </Card>

        <Card className="p-6">
          <GitPullRequest className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Project Tracking</h3>
          <p className="text-muted-foreground">
            Keep track of your project progress, manage versions, and collaborate
            effectively with your team.
          </p>
        </Card>

        <Card className="p-6">
          <Rocket className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Launch Your Project</h3>
          <p className="text-muted-foreground">
            Showcase your work to the community and get valuable feedback from peers
            and mentors.
          </p>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/teams">
          <Button size="lg" className="mr-4">
            <Users className="mr-2 h-5 w-5" />
            Find a Team
          </Button>
        </Link>
        <Link href="/projects">
          <Button size="lg" variant="outline">
            <GitPullRequest className="mr-2 h-5 w-5" />
            Browse Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}