"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  IconBuilding,
  IconUser,
  IconCreditCard,
  IconShield,
  IconSettings,
  IconBell,
  IconDownload,
  IconTrash,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [activeTab, setActiveTab] = useState("practice");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your practice information, user preferences, billing
          configuration, and security settings.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Sidebar - Navigation */}
        <div className="space-y-2 pr-2">
          <div className="bg-white border rounded-lg p-3">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("practice")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "practice"
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <IconBuilding className="h-4 w-4" />
                Practice Information
              </button>
              <button
                onClick={() => setActiveTab("preferences")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "preferences"
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <IconUser className="h-4 w-4" />
                User Preferences
              </button>
              <button
                onClick={() => setActiveTab("billing")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "billing"
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <IconCreditCard className="h-4 w-4" />
                Billing Settings
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "notifications"
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <IconBell className="h-4 w-4" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "security"
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <IconShield className="h-4 w-4" />
                Security
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "advanced"
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <IconDownload className="h-4 w-4" />
                Data Export
              </button>
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="col-span-2">
          <div className="space-y-6">
            {/* Practice Information Tab */}
            {activeTab === "practice" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconBuilding className="h-5 w-5" />
                    Practice Information
                  </CardTitle>
                  <CardDescription>
                    Update your practice details and contact information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="practice-name">Practice Name</Label>
                      <Input
                        id="practice-name"
                        placeholder="Enter practice name"
                        defaultValue="MediCare Clinic"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practice-type">Practice Type</Label>
                      <Select defaultValue="clinic">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clinic">Clinic</SelectItem>
                          <SelectItem value="hospital">Hospital</SelectItem>
                          <SelectItem value="private-practice">
                            Private Practice
                          </SelectItem>
                          <SelectItem value="group-practice">
                            Group Practice
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice-address">Address</Label>
                    <Input
                      id="practice-address"
                      placeholder="Enter practice address"
                      defaultValue="123 Medical Center Dr, Suite 100"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="City"
                        defaultValue="San Francisco"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" defaultValue="CA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="ZIP" defaultValue="94102" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="contact@practice.com"
                        defaultValue="contact@medicare.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tax-id">Tax ID / EIN</Label>
                      <Input
                        id="tax-id"
                        placeholder="XX-XXXXXXX"
                        defaultValue="12-3456789"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="npi">NPI Number</Label>
                      <Input
                        id="npi"
                        placeholder="1234567890"
                        defaultValue="1234567890"
                      />
                    </div>
                  </div>

                  <Button className="w-full md:w-auto">
                    Save Practice Information
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* User Preferences Tab */}
            {activeTab === "preferences" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconUser className="h-5 w-5" />
                    User Preferences
                  </CardTitle>
                  <CardDescription>
                    Customize your personal settings and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Appearance</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="dark-mode" />
                        <Label htmlFor="dark-mode">Enable dark mode</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="compact-view" defaultChecked />
                        <Label htmlFor="compact-view">Use compact view</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Regional Settings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="pst">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pst">
                              Pacific Standard Time (PST)
                            </SelectItem>
                            <SelectItem value="mst">
                              Mountain Standard Time (MST)
                            </SelectItem>
                            <SelectItem value="cst">
                              Central Standard Time (CST)
                            </SelectItem>
                            <SelectItem value="est">
                              Eastern Standard Time (EST)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="cad">CAD (C$)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full md:w-auto">Save Preferences</Button>
                </CardContent>
              </Card>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconBell className="h-5 w-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Configure your notification preferences and alerts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Email Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via email
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Payment Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Get reminded about pending payments
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Invoice Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications for new invoices
                          </p>
                        </div>
                        <Checkbox />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Appointment Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Remind patients about upcoming appointments
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Push Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Browser Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Show notifications in your browser
                          </p>
                        </div>
                        <Checkbox />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Mobile Push</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications on mobile devices
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">
                      Notification Frequency
                    </h4>
                    <div className="space-y-2">
                      <Label htmlFor="frequency">
                        How often to receive notifications
                      </Label>
                      <Select defaultValue="immediate">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="hourly">Hourly digest</SelectItem>
                          <SelectItem value="daily">Daily digest</SelectItem>
                          <SelectItem value="weekly">Weekly digest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="w-full md:w-auto">
                    Save Notification Settings
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Billing Configuration Tab */}
            {activeTab === "billing" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconCreditCard className="h-5 w-5" />
                    Billing Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure your billing settings, payment methods, and
                    invoice preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Payment Methods</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                            <IconCreditCard className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">
                              Expires 12/25
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary">Primary</Badge>
                      </div>
                      <Button variant="outline" className="w-full">
                        Add Payment Method
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Invoice Settings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="invoice-prefix">Invoice Prefix</Label>
                        <Input
                          id="invoice-prefix"
                          placeholder="INV-"
                          defaultValue="INV-"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="next-number">Next Invoice Number</Label>
                        <Input
                          id="next-number"
                          type="number"
                          placeholder="1001"
                          defaultValue="1001"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-terms">
                        Payment Terms (days)
                      </Label>
                      <Input
                        id="payment-terms"
                        type="number"
                        placeholder="30"
                        defaultValue="30"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Tax Settings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                        <Input
                          id="tax-rate"
                          type="number"
                          placeholder="8.5"
                          defaultValue="8.5"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tax-name">Tax Name</Label>
                        <Input
                          id="tax-name"
                          placeholder="Sales Tax"
                          defaultValue="Sales Tax"
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full md:w-auto">
                    Save Billing Settings
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconShield className="h-5 w-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your account security and authentication preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Change Password</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="current-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter current password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <IconEyeOff className="h-4 w-4" />
                            ) : (
                              <IconEye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">
                      Two-Factor Authentication
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Enable 2FA</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Checkbox />
                    </div>
                    <Button variant="outline">Setup 2FA</Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Active Sessions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">
                            Chrome on macOS • San Francisco, CA
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Last active: Now
                          </p>
                        </div>
                        <Badge variant="secondary">Current</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Mobile App</p>
                          <p className="text-sm text-muted-foreground">
                            iOS App • San Francisco, CA
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Last active: 2 hours ago
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Advanced Settings Tab */}
            {activeTab === "advanced" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconSettings className="h-5 w-5" />
                    Advanced Settings
                  </CardTitle>
                  <CardDescription>
                    Manage data, backups, and system preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Data Management</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-0.5">
                          <Label>Export Data</Label>
                          <p className="text-sm text-muted-foreground">
                            Download all your practice data
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <IconDownload className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-0.5">
                          <Label>Backup Data</Label>
                          <p className="text-sm text-muted-foreground">
                            Create a backup of your data
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Backup
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">System Preferences</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Auto-save</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically save changes
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Debug Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable detailed logging
                          </p>
                        </div>
                        <Checkbox />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-destructive">
                      Danger Zone
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
                        <div className="space-y-0.5">
                          <Label className="text-destructive">
                            Delete Account
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all data
                          </p>
                        </div>
                        <Button variant="destructive" size="sm">
                          <IconTrash className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
