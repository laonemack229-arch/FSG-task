import { Header } from "./components/Header";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { KPICard } from "./components/KPICard";
import { RevenueOverview } from "./components/RevenueOverview";
import { CustomerInsights } from "./components/CustomerInsights";
import { OperationalEfficiency } from "./components/OperationalEfficiency";
import { EmployeeMetrics } from "./components/EmployeeMetrics";
import { Users, Target, TrendingUp, Activity, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="p-6 space-y-8">
        {/* Executive Summary - AI Business Impact */}
        <ExecutiveSummary />
        
        {/* Top-Level KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <KPICard
            title="Customer Retention"
            value="82%"
            change="+4% QoQ"
            trend="up"
            icon={<Users className="h-5 w-5 text-blue-600" />}
          />
          <KPICard
            title="Premium Recovery"
            value="BWP 2.4M"
            change="30% of at-risk"
            trend="up"
            icon={<span className="h-5 w-5 text-blue-600 font-bold text-lg">P</span>}
          />
          <KPICard
            title="Cross-Sell Revenue"
            value="BWP 13.5M"
            change="+12.5% growth"
            trend="up"
            icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
          />
          <KPICard
            title="NPS Score"
            value="62"
            change="+14 from baseline"
            trend="up"
            icon={<Users className="h-5 w-5 text-blue-600" />}
          />
          <KPICard
            title="Automation Rate"
            value="55%"
            change="+35% vs baseline"
            trend="up"
            icon={<Zap className="h-5 w-5 text-blue-600" />}
          />
          <KPICard
            title="Cost Savings"
            value="BWP 15M"
            change="25% reduction"
            trend="up"
            icon={<Activity className="h-5 w-5 text-blue-600" />}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Revenue Overview - 2 columns */}
          <RevenueOverview />
          
          {/* Customer Insights - 1 column */}
          <CustomerInsights />
          
          {/* Operational Efficiency - 1 column */}
          <OperationalEfficiency />
        </div>

        {/* Employee Metrics - Full Width */}
        <div className="grid grid-cols-1">
          <EmployeeMetrics />
        </div>
      </main>
    </div>
  );
}