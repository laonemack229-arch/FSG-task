import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon?: React.ReactNode;
}

export function KPICard({ title, value, change, trend, icon }: KPICardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-emerald-600" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-slate-500" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-emerald-600";
      case "down":
        return "text-red-500";
      default:
        return "text-slate-500";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm text-slate-600 font-medium">{title}</CardTitle>
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-slate-800 mb-2">{value}</div>
        <div className={`flex items-center text-sm ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="ml-1">{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}