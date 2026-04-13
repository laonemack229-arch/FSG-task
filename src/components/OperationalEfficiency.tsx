import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function OperationalEfficiency() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-slate-800">Cost & Efficiency</CardTitle>
        <CardDescription>AI-driven operational savings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Operational Cost Reduction */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Operational Cost</span>
            <Badge className="bg-emerald-100 text-emerald-800">25% Savings</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-xs text-slate-600">Baseline</p>
              <p className="text-lg font-bold text-red-600">BWP 60M</p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg">
              <p className="text-xs text-slate-600">Post-AI</p>
              <p className="text-lg font-bold text-emerald-600">BWP 45M</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-2">→ Saved: <strong>BWP 15M</strong> via automation & reconciliation</p>
        </div>

        {/* Automation Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Automation Rate</span>
            <Badge className="bg-blue-100 text-blue-800">55%</Badge>
          </div>
          <div className="bg-slate-100 rounded-full h-2 overflow-hidden mb-2">
            <div className="bg-blue-500 h-full" style={{ width: '55%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Baseline: 20%</span>
            <span>Target: 70%</span>
          </div>
          <p className="text-xs text-slate-600 mt-2">→ AI + workflows reducing human dependency</p>
        </div>

        {/* Reconciliation Cycle Time */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Reconciliation Cycle</span>
            <Badge className="bg-purple-100 text-purple-800">60% Faster</Badge>
          </div>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-xs text-slate-600">Now</p>
              <p className="text-2xl font-bold text-purple-600">2 days</p>
            </div>
            <div className="text-xs text-slate-500">
              <p>Baseline: 5 days</p>
              <p>Straight-through processing enabled</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}