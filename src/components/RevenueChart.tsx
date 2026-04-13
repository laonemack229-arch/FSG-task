import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 420000, target: 400000 },
  { month: "Feb", revenue: 380000, target: 420000 },
  { month: "Mar", revenue: 520000, target: 450000 },
  { month: "Apr", revenue: 480000, target: 470000 },
  { month: "May", revenue: 590000, target: 500000 },
  { month: "Jun", revenue: 620000, target: 520000 },
  { month: "Jul", revenue: 680000, target: 550000 },
  { month: "Aug", revenue: 720000, target: 580000 },
  { month: "Sep", revenue: 650000, target: 600000 },
  { month: "Oct", revenue: 780000, target: 620000 },
  { month: "Nov", revenue: 820000, target: 650000 },
  { month: "Dec", revenue: 900000, target: 680000 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Revenue Performance</CardTitle>
        <CardDescription>Monthly revenue vs target for current fiscal year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              tickFormatter={(value) => `BWP ${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip 
              formatter={(value) => [`BWP ${Number(value).toLocaleString()}`, ""]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              name="Actual Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Target Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}