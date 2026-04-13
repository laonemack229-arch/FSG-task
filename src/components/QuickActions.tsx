import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Users, TrendingUp, Calendar, Target, DollarSign } from "lucide-react";

const actions = [
  { icon: FileText, label: "View Reports", description: "Monthly and quarterly reports" },
  { icon: Users, label: "Team Reviews", description: "Department performance reviews" },
  { icon: TrendingUp, label: "Market Analysis", description: "Latest market insights" },
  { icon: Calendar, label: "Schedule Meeting", description: "Strategic planning session" },
  { icon: Target, label: "Goal Tracking", description: "Review strategic objectives" },
  { icon: DollarSign, label: "Budget Planning", description: "Financial planning tools" },
];

export function QuickActions() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-accent"
            >
              <action.icon className="h-6 w-6" />
              <div className="text-center">
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}