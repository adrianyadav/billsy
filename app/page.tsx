import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconChevronRight,
  IconStethoscope,
  IconShieldCheckFilled,
  IconFileInvoice,
  IconCreditCard,
  IconChartBar,
  IconUsers,
  IconClock,
  IconCheck,
} from "@tabler/icons-react";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <IconStethoscope className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-blue-600">Billsy</span>
          </div>
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {session?.user ? (
                <a href="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </a>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20">
        <div className="container flex flex-col items-center text-center gap-6">
          <IconStethoscope size={64} className="text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Streamline Your Medical Practice Billing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Billsy is the comprehensive billing solution designed specifically for medical practices.
            Manage invoices, track payments, and optimize your revenue with ease.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                Start Free Trial <IconChevronRight size={18} />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need for Medical Billing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for medical practices with features that matter to healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconFileInvoice className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Invoicing</h3>
              <p className="text-muted-foreground">
                Create professional invoices with Medicare codes, item numbers, and automated calculations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconCreditCard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Payment Tracking</h3>
              <p className="text-muted-foreground">
                Monitor payment status, track overdue accounts, and manage bulk billing efficiently.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconChartBar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics & Reports</h3>
              <p className="text-muted-foreground">
                Get insights into your practice performance with detailed reports and analytics.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconUsers className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
              <p className="text-muted-foreground">
                Keep track of patient information, billing history, and account status in one place.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconClock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-muted-foreground">
                Stay updated with real-time notifications and automated reminders for overdue payments.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconShieldCheckFilled className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-muted-foreground">
                HIPAA-compliant security with encrypted data storage and secure payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Billsy?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Designed for Medical Practices</h3>
                    <p className="text-muted-foreground">Built specifically for healthcare providers with medical billing codes and workflows.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Easy to Use</h3>
                    <p className="text-muted-foreground">Intuitive interface that your staff can learn quickly without extensive training.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Save Time & Money</h3>
                    <p className="text-muted-foreground">Automate repetitive tasks and reduce billing errors to improve your bottom line.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-muted-foreground">Get help when you need it with our dedicated support team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of medical practices already using Billsy to streamline their billing process.
              </p>
              <Link href="/signup">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 mt-auto">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <IconStethoscope size={20} className="text-blue-600" />
            <span className="font-bold text-blue-600">Billsy</span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Support
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Billsy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
