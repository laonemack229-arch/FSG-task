import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { department: "Sales", performance: 92, target: 85 },
  { department: "Marketing", performance: 88, target: 90 },
  { department: "Product", performance: 94, target: 95 },
  { department: "Engineering", performance: 89, target: 88 },
  { department: "Customer Success", performance: 91, target: 90 },
  { department: "Operations", performance: 87, target: 85 },
];

export function PerformanceChart() {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Department Performance</CardTitle>
        <CardDescription>Current quarter performance vs targets</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="department" type="category" width={80} />
            <Tooltip formatter={(value) => [`${value}%`, ""]} />
            <Bar 
              dataKey="performance" 
              fill="hsl(var(--primary))" 
              name="Actual"
              radius={[0, 4, 4, 0]}
            />
            <Bar 
              dataKey="target" 
              fill="hsl(var(--muted))" 
              name="Target"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}