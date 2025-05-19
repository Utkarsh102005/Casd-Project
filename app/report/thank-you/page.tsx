import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <div className="container max-w-md py-12">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Thank You!</CardTitle>
          <CardDescription>Your scam report has been submitted successfully</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Your contribution helps protect others from similar scams. Our team will review your report and take
            appropriate action.
          </p>
          <p className="text-sm text-muted-foreground">
            If you provided contact information, we may reach out to you for additional details if needed.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full">
            <Link href="/report">Submit Another Report</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
