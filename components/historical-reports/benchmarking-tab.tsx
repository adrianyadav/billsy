"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  IconScale,
  IconTarget,
  IconTrendingUp,
  IconTrendingDown,
  IconChartBar,
  IconChartLine,
  IconPercentage,
  IconCurrencyDollar,
  IconUsers,
  IconClock,
  IconActivity,
  IconBuildingHospital,
  IconChartPie,
} from "@tabler/icons-react";
import { BenchmarkingCharts } from "./benchmarking-charts";

interface BenchmarkingTabProps {
  dateRange: string;
}

// Mock data for benchmarking analytics
const benchmarkingData = {
  mbsBenchmarking: {
    yourPractice: {
      totalBillings: 485750.5,
      averagePerPatient: 285.5,
      utilizationRate: 87.2,
      collectionRate: 92.5,
      waitTime: 12.5,
    },
    industryAverages: {
      totalBillings: 425000.0,
      averagePerPatient: 245.0,
      utilizationRate: 78.5,
      collectionRate: 88.2,
      waitTime: 18.2,
    },
    topPerformers: {
      totalBillings: 650000.0,
      averagePerPatient: 385.0,
      utilizationRate: 95.0,
      collectionRate: 96.8,
      waitTime: 8.5,
    },
  },
  performanceComparison: [
    {
      metric: "Total Billings",
      yourValue: 485750.5,
      industryAvg: 425000.0,
      topPerformers: 650000.0,
      unit: "$",
      betterThanIndustry: true,
      industryPercentile: 75,
    },
    {
      metric: "Revenue per Patient",
      yourValue: 285.5,
      industryAvg: 245.0,
      topPerformers: 385.0,
      unit: "$",
      betterThanIndustry: true,
      industryPercentile: 80,
    },
    {
      metric: "Utilization Rate",
      yourValue: 87.2,
      industryAvg: 78.5,
      topPerformers: 95.0,
      unit: "%",
      betterThanIndustry: true,
      industryPercentile: 85,
    },
    {
      metric: "Collection Rate",
      yourValue: 92.5,
      industryAvg: 88.2,
      topPerformers: 96.8,
      unit: "%",
      betterThanIndustry: true,
      industryPercentile: 90,
    },
    {
      metric: "Average Wait Time",
      yourValue: 12.5,
      industryAvg: 18.2,
      topPerformers: 8.5,
      unit: "min",
      betterThanIndustry: true,
      industryPercentile: 70,
    },
  ],
  peerComparison: [
    {
      practice: "Your Practice",
      billings: 485750,
      patients: 1702,
      efficiency: 87.2,
    },
    {
      practice: "Practice A",
      billings: 520000,
      patients: 1800,
      efficiency: 89.5,
    },
    {
      practice: "Practice B",
      billings: 450000,
      patients: 1650,
      efficiency: 82.1,
    },
    {
      practice: "Practice C",
      billings: 480000,
      patients: 1750,
      efficiency: 85.8,
    },
    {
      practice: "Practice D",
      billings: 510000,
      patients: 1820,
      efficiency: 88.3,
    },
    {
      practice: "Practice E",
      billings: 465000,
      patients: 1680,
      efficiency: 84.2,
    },
  ],
  industryBenchmarks: {
    specialties: [
      {
        specialty: "General Practice",
        avgBillings: 425000,
        yourBillings: 485750,
        rank: "Above Average",
      },
      {
        specialty: "Internal Medicine",
        avgBillings: 520000,
        yourBillings: 485750,
        rank: "Below Average",
      },
      {
        specialty: "Family Medicine",
        avgBillings: 410000,
        yourBillings: 485750,
        rank: "Above Average",
      },
    ],
    regions: [
      {
        region: "Metropolitan",
        avgBillings: 450000,
        yourBillings: 485750,
        rank: "Above Average",
      },
      {
        region: "Regional",
        avgBillings: 380000,
        yourBillings: 485750,
        rank: "Above Average",
      },
      {
        region: "Rural",
        avgBillings: 320000,
        yourBillings: 485750,
        rank: "Above Average",
      },
    ],
  },
};

export function BenchmarkingTab({ dateRange }: BenchmarkingTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount);
  };

  const getPerformanceIcon = (betterThanIndustry: boolean) => {
    return betterThanIndustry ? (
      <IconTrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <IconTrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getPerformanceColor = (betterThanIndustry: boolean) => {
    return betterThanIndustry ? "text-green-600" : "text-red-600";
  };

  const getRankBadge = (rank: string) => {
    if (rank.includes("Above")) {
      return (
        <Badge variant="default" className="bg-green-100 text-green-800">
          {rank}
        </Badge>
      );
    } else if (rank.includes("Below")) {
      return <Badge variant="destructive">{rank}</Badge>;
    } else {
      return <Badge variant="outline">{rank}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* MBS Benchmarking Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconScale className="h-5 w-5" />
            MBS Benchmarking Framework
          </CardTitle>
          <CardDescription>
            Your practice performance compared to industry standards and top
            performers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Your Practice</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Total Billings:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      benchmarkingData.mbsBenchmarking.yourPractice
                        .totalBillings,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Per Patient:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      benchmarkingData.mbsBenchmarking.yourPractice
                        .averagePerPatient,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Utilization:</span>
                  <span className="font-semibold">
                    {
                      benchmarkingData.mbsBenchmarking.yourPractice
                        .utilizationRate
                    }
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Collection Rate:</span>
                  <span className="font-semibold">
                    {
                      benchmarkingData.mbsBenchmarking.yourPractice
                        .collectionRate
                    }
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Wait Time:</span>
                  <span className="font-semibold">
                    {benchmarkingData.mbsBenchmarking.yourPractice.waitTime} min
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Industry Average</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Total Billings:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      benchmarkingData.mbsBenchmarking.industryAverages
                        .totalBillings,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Per Patient:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      benchmarkingData.mbsBenchmarking.industryAverages
                        .averagePerPatient,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Utilization:</span>
                  <span className="font-semibold">
                    {
                      benchmarkingData.mbsBenchmarking.industryAverages
                        .utilizationRate
                    }
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Collection Rate:</span>
                  <span className="font-semibold">
                    {
                      benchmarkingData.mbsBenchmarking.industryAverages
                        .collectionRate
                    }
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Wait Time:</span>
                  <span className="font-semibold">
                    {benchmarkingData.mbsBenchmarking.industryAverages.waitTime}{" "}
                    min
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-purple-600">Top Performers</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Total Billings:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      benchmarkingData.mbsBenchmarking.topPerformers
                        .totalBillings,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Per Patient:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      benchmarkingData.mbsBenchmarking.topPerformers
                        .averagePerPatient,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Utilization:</span>
                  <span className="font-semibold">
                    {
                      benchmarkingData.mbsBenchmarking.topPerformers
                        .utilizationRate
                    }
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Collection Rate:</span>
                  <span className="font-semibold">
                    {
                      benchmarkingData.mbsBenchmarking.topPerformers
                        .collectionRate
                    }
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Wait Time:</span>
                  <span className="font-semibold">
                    {benchmarkingData.mbsBenchmarking.topPerformers.waitTime}{" "}
                    min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconTarget className="h-5 w-5" />
            Performance Comparison
          </CardTitle>
          <CardDescription>
            Detailed comparison of key metrics against industry standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {benchmarkingData.performanceComparison.map((metric) => (
              <div key={metric.metric} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{metric.metric}</span>
                    {getPerformanceIcon(metric.betterThanIndustry)}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div
                        className={`font-semibold ${getPerformanceColor(metric.betterThanIndustry)}`}
                      >
                        {metric.unit === "$"
                          ? formatCurrency(metric.yourValue)
                          : `${metric.yourValue}${metric.unit}`}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.industryPercentile}th percentile
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-green-600">
                      {metric.unit === "$"
                        ? formatCurrency(metric.yourValue)
                        : `${metric.yourValue}${metric.unit}`}
                    </div>
                    <div className="text-muted-foreground">Your Practice</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">
                      {metric.unit === "$"
                        ? formatCurrency(metric.industryAvg)
                        : `${metric.industryAvg}${metric.unit}`}
                    </div>
                    <div className="text-muted-foreground">Industry Avg</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">
                      {metric.unit === "$"
                        ? formatCurrency(metric.topPerformers)
                        : `${metric.topPerformers}${metric.unit}`}
                    </div>
                    <div className="text-muted-foreground">Top Performers</div>
                  </div>
                </div>
                <Progress
                  value={(metric.yourValue / metric.topPerformers) * 100}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Peer Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartBar className="h-5 w-5" />
            Peer Practice Comparison
          </CardTitle>
          <CardDescription>
            Comparison with similar practices in your network
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BenchmarkingCharts data={benchmarkingData.peerComparison} />
        </CardContent>
      </Card>

      {/* Industry Benchmark Reports */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconBuildingHospital className="h-5 w-5" />
              Specialty Comparison
            </CardTitle>
            <CardDescription>
              Performance compared to similar specialties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {benchmarkingData.industryBenchmarks.specialties.map(
                (specialty) => (
                  <div
                    key={specialty.specialty}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <div className="font-medium">{specialty.specialty}</div>
                      <div className="text-sm text-muted-foreground">
                        Avg: {formatCurrency(specialty.avgBillings)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {formatCurrency(specialty.yourBillings)}
                      </div>
                      {getRankBadge(specialty.rank)}
                    </div>
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconChartPie className="h-5 w-5" />
              Regional Comparison
            </CardTitle>
            <CardDescription>
              Performance compared to regional averages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {benchmarkingData.industryBenchmarks.regions.map((region) => (
                <div
                  key={region.region}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{region.region}</div>
                    <div className="text-sm text-muted-foreground">
                      Avg: {formatCurrency(region.avgBillings)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      {formatCurrency(region.yourBillings)}
                    </div>
                    {getRankBadge(region.rank)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
