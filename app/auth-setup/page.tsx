import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Chrome, KeyRound, Database, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AuthSetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">OAuth Authentication Setup</h1>
          <p className="text-muted-foreground text-lg">
            Complete guide to the OAuth implementation and configuration
          </p>
        </div>

        <Alert>
          <Shield className="h-4 w-4" />
          <AlertTitle>Production-Ready OAuth Implementation</AlertTitle>
          <AlertDescription>
            This application uses Auth.js (NextAuth v5) with Google OAuth for secure, production-ready authentication.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Chrome className="h-6 w-6" />
              Google OAuth Provider
            </CardTitle>
            <CardDescription>
              Industry-standard OAuth 2.0 authentication with Google
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Why Google OAuth?</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>No password management required - Google handles security</li>
                <li>Trusted authentication provider used by millions</li>
                <li>Automatic security updates and patches</li>
                <li>Built-in email verification</li>
                <li>Support for multi-factor authentication</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Configuration Steps</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <span className="font-medium">Created OAuth 2.0 Client</span>
                  <p className="ml-6 text-muted-foreground">
                    Registered application in Google Cloud Console with proper callback URLs
                  </p>
                </li>
                <li>
                  <span className="font-medium">Configured Environment Variables</span>
                  <p className="ml-6 text-muted-foreground">
                    Set AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET in .env.local
                  </p>
                </li>
                <li>
                  <span className="font-medium">Integrated Auth.js v5</span>
                  <p className="ml-6 text-muted-foreground">
                    Implemented with Prisma adapter for database session management
                  </p>
                </li>
                <li>
                  <span className="font-medium">Protected Routes</span>
                  <p className="ml-6 text-muted-foreground">
                    Middleware enforces authentication for all Person CRUD operations
                  </p>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              Database Integration
            </CardTitle>
            <CardDescription>
              Prisma adapter with Vercel Neon Postgres
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Auth.js Database Tables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border rounded-lg p-3">
                  <Badge variant="secondary" className="mb-2">users</Badge>
                  <p className="text-sm text-muted-foreground">
                    Stores user profile information from Google
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <Badge variant="secondary" className="mb-2">accounts</Badge>
                  <p className="text-sm text-muted-foreground">
                    Links user accounts to OAuth providers
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <Badge variant="secondary" className="mb-2">sessions</Badge>
                  <p className="text-sm text-muted-foreground">
                    Manages active user sessions
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <Badge variant="secondary" className="mb-2">verification_tokens</Badge>
                  <p className="text-sm text-muted-foreground">
                    Handles email verification tokens
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Session Strategy</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Database-backed sessions for better control and security</li>
                <li>30-day session expiration with automatic renewal</li>
                <li>Session revocation support for security incidents</li>
                <li>Cross-device session management</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <KeyRound className="h-6 w-6" />
              Authentication Flow
            </CardTitle>
            <CardDescription>
              How the OAuth login process works
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">User Initiates Sign-In</h4>
                  <p className="text-sm text-muted-foreground">
                    User clicks &quot;Sign in with Google&quot; button
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">OAuth Redirect</h4>
                  <p className="text-sm text-muted-foreground">
                    User is redirected to Google&apos;s authentication page
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">User Authenticates</h4>
                  <p className="text-sm text-muted-foreground">
                    User logs in with Google credentials and grants permissions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">OAuth Callback</h4>
                  <p className="text-sm text-muted-foreground">
                    Google redirects back with authorization code
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold">Session Creation</h4>
                  <p className="text-sm text-muted-foreground">
                    Auth.js creates user account and session in database
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  6
                </div>
                <div>
                  <h4 className="font-semibold">Access Granted</h4>
                  <p className="text-sm text-muted-foreground">
                    User is redirected to the application with authenticated session
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              Implementation Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                "Google OAuth provider configured and tested",
                "Database schema includes Auth.js tables",
                "Session management with 30-day expiration",
                "Protected routes via Next.js middleware",
                "Secure logout with session cleanup",
                "User profile display in navbar",
                "Automatic redirect to sign-in for protected pages",
                "Environment variables properly configured",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Link href="/security" className="flex-1">
            <Card className="hover:border-primary cursor-pointer transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Security Features →</CardTitle>
                <CardDescription>
                  Learn about security implementation
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/github" className="flex-1">
            <Card className="hover:border-primary cursor-pointer transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">GitHub Repository →</CardTitle>
                <CardDescription>
                  View the source code
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
