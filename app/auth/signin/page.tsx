import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chrome } from "lucide-react"
import { handleGoogleSignIn } from "@/app/actions/auth-actions"

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome to Person Search</CardTitle>
          <CardDescription className="text-center">
            Sign in with your Google account to access the application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={handleGoogleSignIn} className="w-full">
            <Button type="submit" className="w-full" size="lg" variant="default">
              <Chrome className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
          </form>
          
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              By signing in, you agree to our terms of service and privacy policy.
            </p>
            <div className="pt-4 space-y-1">
              <p className="font-medium">Need help?</p>
              <div className="space-x-2">
                <a href="/about" className="text-primary hover:underline">About</a>
                <span>•</span>
                <a href="/auth-setup" className="text-primary hover:underline">Auth Setup</a>
                <span>•</span>
                <a href="/security" className="text-primary hover:underline">Security</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
