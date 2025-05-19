import Link from "next/link"
import { Shield } from "lucide-react"
import { Text } from "@/components/ui/text"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <Text as="span" className="font-bold text-xl">
                CyberSuraksha
              </Text>
            </Link>
            <Text as="p" className="text-sm opacity-70">
              Protecting citizens in the digital world through education, awareness, and community-driven threat
              intelligence.
            </Text>
          </div>
          <div className="space-y-4">
            <Text as="h3" className="text-sm font-medium">
              Services
            </Text>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/report" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Report Scams</Text>
                </Link>
              </li>
              <li>
                <Link href="/alerts" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Scam Alerts</Text>
                </Link>
              </li>
              <li>
                <Link href="/scanner" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Threat Scanner</Text>
                </Link>
              </li>
              <li>
                <Link href="/cyber-tips" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Cyber Safety Tips</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <Text as="h3" className="text-sm font-medium">
              Company
            </Text>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>About Us</Text>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Contact</Text>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Privacy Policy</Text>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-custom opacity-70 hover:opacity-100 transition-opacity">
                  <Text>Terms of Service</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <Text as="h3" className="text-sm font-medium">
              Connect
            </Text>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-custom opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Text>Twitter</Text>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-custom opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Text>Facebook</Text>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-custom opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Text>Instagram</Text>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-custom opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Text>GitHub</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <Text as="p" className="text-xs opacity-70">
            &copy; {new Date().getFullYear()} CyberSuraksha. All rights reserved.
          </Text>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-custom opacity-70 hover:opacity-100 transition-opacity text-xs">
              <Text>Privacy</Text>
            </Link>
            <Link href="/terms" className="text-custom opacity-70 hover:opacity-100 transition-opacity text-xs">
              <Text>Terms</Text>
            </Link>
            <Link href="/contact" className="text-custom opacity-70 hover:opacity-100 transition-opacity text-xs">
              <Text>Contact</Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
