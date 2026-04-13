import { Card, CardContent } from "./ui/card";
import { TrendingUp } from "lucide-react";

export function ExecutiveSummary() {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-blue-800 border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-xl font-bold mb-6">AI BUSINESS IMPACT</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-blue-100 text-sm font-medium">Revenue Uplift</p>
                <p className="text-white text-2xl font-bold">+BWP 3.9M</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm font-medium">Cost Savings</p>
                <p className="text-white text-2xl font-bold">+BWP 15M</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Value/Year</p>
                <p className="text-white text-2xl font-bold">BWP 18.9M</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm font-medium">Payback Period</p>
                <p className="text-white text-2xl font-bold">&lt; 9 months</p>
                <p className="text-blue-200 text-xs mt-1">Investment: BWP 12M</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <TrendingUp className="h-24 w-24 text-blue-300 opacity-30" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
