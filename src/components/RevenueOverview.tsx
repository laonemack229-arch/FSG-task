import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function RevenueOverview() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-slate-800">Revenue Performance</CardTitle>
        <CardDescription>AI-driven revenue recovery & growth metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Customer Retention */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Customer Retention Rate</span>
            <Badge className="bg-emerald-100 text-emerald-800">82% Current</Badge>
          </div>
          <div className="bg-slate-100 rounded-full h-2 overflow-hidden">
            <div className="bg-emerald-500 h-full" style={{ width: '82%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>Baseline: 78%</span>
            <span>Target: 90%</span>
          </div>
          <p className="text-xs text-slate-600 mt-2">↑ <strong>+4% QoQ</strong> - Retention improving due to lapse prediction model</p>
        </div>

        {/* Premium Recovery */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Premium Recovery (At-Risk)</span>
            <Badge className="bg-blue-100 text-blue-800">30% Recovered</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-xs text-slate-600">At-Risk Premium</p>
              <p className="text-lg font-bold text-red-600">BWP 8M</p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg">
              <p className="text-xs text-slate-600">Recovered via AI</p>
              <p className="text-lg font-bold text-emerald-600">BWP 2.4M</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-2">→ AI campaigns recovering 30% of churn-risk revenue</p>
        </div>

        {/* Cross-Sell / Upsell */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Cross-Sell & Upsell Revenue</span>
            <Badge className="bg-blue-100 text-blue-800">+12.5%</Badge>
          </div>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-xs text-slate-600">Current Revenue</p>
              <p className="text-2xl font-bold text-blue-600">BWP 13.5M</p>
            </div>
            <div className="text-xs text-slate-500">
              <p>Baseline: BWP 12M</p>
              <p>Driven by Customer 360 + personalization</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}