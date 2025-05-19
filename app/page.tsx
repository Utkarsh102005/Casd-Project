import Link from "next/link"
import { Shield, AlertTriangle, FileSearch, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Protecting Citizens in the Digital World
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                CyberSuraksha helps you stay safe online by providing tools to report scams, get alerts about threats,
                scan files and URLs, and learn cybersecurity best practices.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="/report">Report a Scam</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link href="/scanner">Scan for Threats</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                      <Shield className="h-10 w-10 text-blue-600 mb-2" />
                      <p className="text-sm font-medium text-center">Protect Your Data</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                      <p className="text-sm font-medium text-center">Get Scam Alerts</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                      <FileSearch className="h-10 w-10 text-green-600 mb-2" />
                      <p className="text-sm font-medium text-center">Scan Files & URLs</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                      <BookOpen className="h-10 w-10 text-purple-600 mb-2" />
                      <p className="text-sm font-medium text-center">Cyber Safety Tips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive tools to keep you and your loved ones safe in the digital world
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Report Scams</CardTitle>
                <CardDescription>Report phishing, fraud, and other online scams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Submit details about scam messages, calls, or websites you've encountered to help protect others.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/report">
                    Report Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scam Alerts</CardTitle>
                <CardDescription>Stay informed about active scams in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  View real-time alerts about scams reported in your region and get notifications about new threats.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/alerts">
                    View Alerts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Threat Scanner</CardTitle>
                <CardDescription>Check files and URLs for malicious content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FileSearch className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Scan suspicious files and links to detect malware, phishing attempts, and other threats.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/scanner">
                    Scan Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 border-b pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-sm text-gray-500">Scams Reported</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border-b pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
              <div className="text-4xl font-bold">5K+</div>
              <div className="text-sm text-gray-500">Threats Detected</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border-b pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-sm text-gray-500">Files Scanned</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">100K+</div>
              <div className="text-sm text-gray-500">Users Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Join the Fight Against Cyber Threats
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create an account to access personalized alerts, save scan history, and contribute to our
                community-driven threat database.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/auth/signup">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link href="/auth/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
