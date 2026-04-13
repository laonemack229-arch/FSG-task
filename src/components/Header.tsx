import { Bell, Settings, User, Calendar, Filter, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-semibold text-slate-800">Executive Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Select defaultValue="q4-2026">
              <SelectTrigger className="w-40">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="q4-2026">Q4 2026</SelectItem>
                <SelectItem value="q3-2026">Q3 2026</SelectItem>
                <SelectItem value="q2-2026">Q2 2026</SelectItem>
                <SelectItem value="ytd-2026">YTD 2026</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all-countries">
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-countries">All Countries</SelectItem>
                <SelectItem value="botswana">Botswana</SelectItem>
                <SelectItem value="zambia">Zambia</SelectItem>
                <SelectItem value="south-africa">South Africa</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all-departments">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-departments">All Departments</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
            </Button>
            
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}