import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function CustomerInsights() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-slate-800">Customer Experience</CardTitle>
        <CardDescription>AI-driven service improvements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* NPS Score */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Net Promoter Score (NPS)</span>
            <Badge className="bg-emerald-100 text-emerald-800">+14 Δ</Badge>
          </div>
          <div className="flex items-end gap-2">
            <div className="text-3xl font-bold text-emerald-600">62</div>
            <div className="text-xs text-slate-500 mb-1">
              <p>Baseline: 48</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-2">→ Faster service + personalization</p>
        </div>

        {/* Response Time */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Avg Response Time</span>
            <Badge className="bg-blue-100 text-blue-800">60% Faster</Badge>
          </div>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-xs text-slate-600">Now</p>
              <p className="text-2xl font-bold text-blue-600">6 hrs</p>
            </div>
            <div className="text-xs text-slate-500">
              <p>Baseline: 24 hrs</p>
              <p>AI chatbot + automation</p>
            </div>
          </div>
        </div>

        {/* Engagement Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Engagement Rate</span>
            <Badge className="bg-purple-100 text-purple-800">+20%</Badge>
          </div>
          <div className="bg-slate-100 rounded-full h-2 overflow-hidden mb-2">
            <div className="bg-purple-500 h-full" style={{ width: '38%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Baseline: 18%</span>
            <span>Now: 38%</span>
          </div>
          <p className="text-xs text-slate-600 mt-2">→ Personalized campaigns outperform generic messaging</p>
        </div>
      </CardContent>
    </Card>
  );
}