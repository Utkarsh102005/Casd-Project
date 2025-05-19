import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Shield, Lock, Eye, CreditCard, Smartphone, Wifi, Share2 } from "lucide-react"
import Link from "next/link"

export default function CyberTipsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cyber Safety Tips</h1>
          <p className="text-gray-500 mt-2">Learn how to protect yourself and your loved ones from cyber threats.</p>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="online">Online Safety</TabsTrigger>
            <TabsTrigger value="device">Device Security</TabsTrigger>
            <TabsTrigger value="financial">Financial Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      Essential
                    </Badge>
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="mt-2">Use Strong, Unique Passwords</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Create complex passwords with a mix of letters, numbers, and symbols. Never reuse passwords across
                    different accounts.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use at least 12 characters with a mix of character types</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Consider using a password manager</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Don't use personal information like birthdays or names</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/passwords">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      Essential
                    </Badge>
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="mt-2">Enable Two-Factor Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Add an extra layer of security by requiring a second form of verification beyond just your password.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use authenticator apps instead of SMS when possible</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Enable 2FA on all important accounts (email, banking, social)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Keep backup codes in a secure location</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/two-factor">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      Essential
                    </Badge>
                    <Eye className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="mt-2">Recognize Phishing Attempts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Learn to identify suspicious emails, messages, and calls that try to trick you into revealing
                    sensitive information.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Be suspicious of urgent requests for personal information</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Check email sender addresses carefully</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Don't click on suspicious links or attachments</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/phishing">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="online" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                      Privacy
                    </Badge>
                    <Share2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="mt-2">Social Media Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Protect your personal information on social media platforms by adjusting privacy settings and being
                    mindful of what you share.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Regularly review and update privacy settings</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Avoid sharing personal identifiable information publicly</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Be cautious about accepting friend/connection requests</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/social-media">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                      Privacy
                    </Badge>
                    <Wifi className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="mt-2">Public Wi-Fi Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Protect your data when using public Wi-Fi networks in cafes, airports, and other public places.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use a VPN when connecting to public Wi-Fi</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Avoid accessing sensitive accounts on public networks</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Verify you're connecting to the legitimate network</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/wifi-safety">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                      Privacy
                    </Badge>
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="mt-2">Safe Online Shopping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Protect yourself when shopping online to avoid scams, fraud, and identity theft.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Shop only on secure websites (look for HTTPS)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use credit cards instead of debit cards for better protection</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Avoid deals that seem too good to be true</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/safe-shopping">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="device" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                      Device
                    </Badge>
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="mt-2">Mobile Device Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Protect your smartphones and tablets from threats and unauthorized access.</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use biometric authentication when available</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Keep your operating system and apps updated</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Don't install apps from unknown sources</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/mobile-security">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                      Device
                    </Badge>
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="mt-2">Software Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Keep your devices and software up-to-date to protect against known vulnerabilities.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Enable automatic updates when possible</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Regularly check for updates on all devices</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Don't delay security updates</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/updates">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                      Device
                    </Badge>
                    <Lock className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="mt-2">Data Backup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Regularly back up your important data to protect against ransomware, device failure, and data loss.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Follow the 3-2-1 backup rule</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Encrypt your backups</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Test your backups regularly</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/backups">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                      Financial
                    </Badge>
                    <CreditCard className="h-5 w-5 text-yellow-600" />
                  </div>
                  <CardTitle className="mt-2">Banking Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Protect your financial accounts and transactions from fraud and unauthorized access.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Monitor your accounts regularly for suspicious activity</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Never share OTPs or banking credentials with anyone</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Set up transaction alerts for your accounts</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/banking">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                      Financial
                    </Badge>
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <CardTitle className="mt-2">UPI & Payment App Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Secure your digital payment apps and UPI transactions from fraud and scams.</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use app lock or biometric authentication</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Never share your UPI PIN with anyone</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Be cautious of "receive money" requests</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/upi-safety">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                      Financial
                    </Badge>
                    <Eye className="h-5 w-5 text-yellow-600" />
                  </div>
                  <CardTitle className="mt-2">Identity Theft Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Protect your personal information from being stolen and misused by criminals.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Regularly check your credit reports</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-xs">Use our scanner to check if your data has been breached</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xs">Don't share ID documents unless absolutely necessary</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/cyber-tips/identity-protection">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
