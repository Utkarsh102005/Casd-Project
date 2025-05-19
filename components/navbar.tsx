"use client"

import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Shield, Menu, Bell, AlertTriangle, FileSearch, BookOpen, User } from "lucide-react"
import { Text } from "@/components/ui/text"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: null,
    },
    {
      name: "Report Scam",
      path: "/report",
      icon: <AlertTriangle className="h-4 w-4 mr-2" />,
    },
    {
      name: "Scam Alerts",
      path: "/alerts",
      icon: <Bell className="h-4 w-4 mr-2" />,
    },
    {
      name: "Threat Scanner",
      path: "/scanner",
      icon: <FileSearch className="h-4 w-4 mr-2" />,
    },
    {
      name: "Cyber Tips",
      path: "/cyber-tips",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
    },
  ]

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <Text as="span" className="font-bold text-xl hidden md:inline-block">
              CyberSuraksha
            </Text>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                isActive(route.path) ? "text-custom" : "text-custom opacity-70"
              }`}
            >
              {route.icon}
              <Text>{route.name}</Text>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  <Text>Sign In</Text>
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">
                  <Text className="text-white">Sign Up</Text>
                </Button>
              </Link>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle Menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="px-7">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Shield className="h-6 w-6 text-blue-600" />
                    <Text as="span" className="font-bold text-xl">
                      CyberSuraksha
                    </Text>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-8 px-7">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                        isActive(route.path) ? "text-custom" : "text-custom opacity-70"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.icon}
                      <Text>{route.name}</Text>
                    </Link>
                  ))}
                  <Separator className="my-4" />
                  <Link
                    href="/auth/login"
                    className="flex items-center text-sm font-medium transition-colors hover:text-primary text-custom opacity-70"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    <Text>Sign In</Text>
                  </Link>
                  <div className="mt-4">
                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">
                        <Text className="text-white">Sign Up</Text>
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
