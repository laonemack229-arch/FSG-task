import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function EmployeeMetrics() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-slate-800">Data & AI Performance</CardTitle>
        <CardDescription>AI model accuracy and data infrastructure metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Data Quality Score */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Data Quality Score</span>
            <Badge className="bg-emerald-100 text-emerald-800">+26%</Badge>
          </div>
          <div className="bg-slate-100 rounded-full h-3 overflow-hidden mb-2">
            <div className="bg-emerald-500 h-full" style={{ width: '96%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Baseline: 70%</span>
            <span>Current: 96%</span>
          </div>
          <p className="text-xs text-slate-600">→ MDM + governance implemented</p>
        </div>

        {/* Time-to-Insight */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-600">Time-to-Insight</span>
            <Badge className="bg-blue-100 text-blue-800">Near Real-Time</Badge>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">Baseline</p>
              <p className="font-bold text-slate-800">3 days</p>
            </div>
            <div className="flex items-center justify-center text-slate-400">
              <span>→</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <p className="text-xs text-slate-600">Current</p>
              <p className="font-bold text-blue-600">2 hours</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-2">→ Streaming + lakehouse architecture</p>
        </div>

        {/* Model Accuracy */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-600">AI Model Accuracy</span>
            <Badge className="bg-purple-100 text-purple-800">Reliable</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Lapse Prediction Model</span>
                <span className="font-bold text-slate-800">87%</span>
              </div>
              <div className="bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Fraud Detection Model</span>
                <span className="font-bold text-slate-800">91%</span>
              </div>
              <div className="bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-purple-500 h-full" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-3">→ Reliable decision automation</p>
        </div>
      </CardContent>
    </Card>
  );
}