import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Q4 Sales Target at Risk",
    description: "Sales performance is 12% below target for this quarter",
    priority: "High",
  },
  {
    id: 2,
    type: "info",
    title: "New Market Opportunity",
    description: "Potential expansion opportunity identified in Southeast Asia",
    priority: "Medium",
  },
  {
    id: 3,
    type: "success",
    title: "Product Launch Success",
    description: "New product exceeded launch targets by 23%",
    priority: "Low",
  },
];

export function AlertsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "info":
        return <Info className="h-4 w-4" />;
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Strategic Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} className="border-l-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                {getIcon(alert.type)}
                <div className="space-y-1">
                  <p className="text-sm font-medium">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.description}</p>
                </div>
              </div>
              <Badge variant={getPriorityColor(alert.priority) as any} className="text-xs">
                {alert.priority}
              </Badge>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}