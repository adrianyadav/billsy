"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  IconSearch, 
  IconFilter, 
  IconDownload,
  IconTrendingUp,
  IconCalendar,
  IconActivity
} from "@tabler/icons-react";

export default function MBSPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const mbsItems = [
    {
      code: "23",
      description: "Level C consultation",
      category: "General Practice",
      fee: 89.65,
      rebate: 89.65,
      usage: 45,
      lastUsed: "2025-08-27"
    },
    {
      code: "36",
      description: "Level B consultation",
      category: "General Practice",
      fee: 75.25,
      rebate: 75.25,
      usage: 38,
      lastUsed: "2025-08-27"
    },
    {
      code: "44",
      description: "Level A consultation",
      category: "General Practice",
      fee: 40.50,
      rebate: 40.50,
      usage: 12,
      lastUsed: "2025-08-26"
    },
    {
      code: "91800",
      description: "Telehealth consultation by video call",
      category: "Telehealth",
      fee: 89.65,
      rebate: 89.65,
      usage: 22,
      lastUsed: "2025-08-27"
    },
    {
      code: "701",
      description: "Health assessment - 45-49 years",
      category: "Health Assessments",
      fee: 234.85,
      rebate: 234.85,
      usage: 8,
      lastUsed: "2025-08-26"
    },
    {
      code: "721",
      description: "Chronic disease management plan review",
      category: "CDM",
      fee: 143.45,
      rebate: 143.45,
      usage: 15,
      lastUsed: "2025-08-25"
    },
    {
      code: "30071",
      description: "Removal of foreign body from ear",
      category: "Procedures",
      fee: 156.30,
      rebate: 156.30,
      usage: 3,
      lastUsed: "2025-08-24"
    },
    {
      code: "2713",
      description: "ECG recording and report",
      category: "Diagnostics",
      fee: 35.75,
      rebate: 35.75,
      usage: 6,
      lastUsed: "2025-08-23"
    }
  ];

  const categories = [
    { name: "General Practice", items: 3, usage: 95, avgFee: 68.47 },
    { name: "Telehealth", items: 1, usage: 22, avgFee: 89.65 },
    { name: "Health Assessments", items: 1, usage: 8, avgFee: 234.85 },
    { name: "CDM", items: 1, usage: 15, avgFee: 143.45 },
    { name: "Procedures", items: 1, usage: 3, avgFee: 156.30 },
    { name: "Diagnostics", items: 1, usage: 6, avgFee: 35.75 }
  ];

  const filteredItems = mbsItems.filter(item => {
    const matchesSearch = item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Medicare Benefits Schedule (MBS)</h1>
        <p className="text-muted-foreground">
          Manage MBS item codes, fees, and usage statistics.
        </p>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total MBS Items</CardTitle>
            <IconActivity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Active item codes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usage</CardTitle>
            <IconTrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">149</div>
            <p className="text-xs text-muted-foreground">Services billed this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Fee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$108.17</div>
            <p className="text-xs text-muted-foreground">Per service</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IconCalendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$14,066.00</div>
            <p className="text-xs text-muted-foreground">From MBS items</p>
          </CardContent>
        </Card>
      </div>

      {/* Usage by Category */}
      <Card>
        <CardHeader>
          <CardTitle>Usage by Category</CardTitle>
          <CardDescription>Breakdown of MBS usage by service category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{category.name}</h4>
                  <Badge variant="secondary">{category.items} items</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Usage:</span>
                    <span className="font-medium">{category.usage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Fee:</span>
                    <span className="font-medium">${category.avgFee.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* MBS Item Codes Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>MBS Item Codes</CardTitle>
              <CardDescription>Search and manage your MBS item codes</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <IconDownload className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by code or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <IconFilter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Categories">All Categories</SelectItem>
                <SelectItem value="General Practice">General Practice</SelectItem>
                <SelectItem value="Telehealth">Telehealth</SelectItem>
                <SelectItem value="Health Assessments">Health Assessments</SelectItem>
                <SelectItem value="CDM">CDM</SelectItem>
                <SelectItem value="Procedures">Procedures</SelectItem>
                <SelectItem value="Diagnostics">Diagnostics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item Code</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Rebate</TableHead>
                  <TableHead>Usage (Month)</TableHead>
                  <TableHead>Last Used</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.code}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell>${item.fee.toFixed(2)}</TableCell>
                    <TableCell>${item.rebate.toFixed(2)}</TableCell>
                    <TableCell>{item.usage}</TableCell>
                    <TableCell>{item.lastUsed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}