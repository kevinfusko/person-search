import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, FileKey, AlertTriangle, CheckCircle2, Database } from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Security Features</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive security implementation and protected routes documentation
          </p>
        </div>

        <Alert>
          <Shield className="h-4 w-4" />
          <AlertTitle>Enterprise-Grade Security</AlertTitle>
          <AlertDescription>
            This application implements industry best practices for OAuth authentication, session management, and data protection.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6" />
              Protected Routes
            </CardTitle>
            <CardDescription>
              Authentication required for all Person CRUD operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="destructive">Protected</Badge>
                  <span className="font-mono text-sm">/</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Main application - requires authentication to view and manage people
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Public</Badge>
                  <span className="font-mono text-sm">/about</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  About page - accessible without authentication
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Public</Badge>
                  <span className="font-mono text-sm">/auth-setup</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  OAuth setup documentation - accessible without authentication
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Public</Badge>
                  <span className="font-mono text-sm">/security</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Security documentation - accessible without authentication
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Public</Badge>
                  <span className="font-mono text-sm">/github</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  GitHub repository link - accessible without authentication
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Public</Badge>
                  <span className="font-mono text-sm">/auth/signin</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sign-in page - accessible without authentication
                </p>
              </div>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Any attempt to access protected routes without authentication will automatically redirect to the sign-in page.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              OAuth Security Features
            </CardTitle>
            <CardDescription>
              Google OAuth provides multiple layers of security
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  No Password Storage
                </h4>
                <p className="text-sm text-muted-foreground">
                  Google manages passwords - eliminates password breach risks
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Token-Based Auth
                </h4>
                <p className="text-sm text-muted-foreground">
                  OAuth tokens instead of credentials for secure API access
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Encrypted Sessions
                </h4>
                <p className="text-sm text-muted-foreground">
                  Database sessions with secure token generation
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  CSRF Protection
                </h4>
                <p className="text-sm text-muted-foreground">
                  Built-in protection against cross-site request forgery
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Secure Callbacks
                </h4>
                <p className="text-sm text-muted-foreground">
                  Validated redirect URLs prevent phishing attacks
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Email Verification
                </h4>
                <p className="text-sm text-muted-foreground">
                  Google ensures email validity before authentication
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              Session Management
            </CardTitle>
            <CardDescription>
              Secure session handling with database persistence
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Database-Backed Sessions</h4>
                  <p className="text-sm text-muted-foreground">
                    Sessions stored in Postgres via Prisma for reliability and scalability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">30-Day Session Expiration</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatic session expiration with renewal on activity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Session Revocation</h4>
                  <p className="text-sm text-muted-foreground">
                    Immediate session termination on logout with database cleanup
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Cross-Device Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Track and manage sessions across multiple devices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Secure Session Tokens</h4>
                  <p className="text-sm text-muted-foreground">
                    Cryptographically secure token generation and validation
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileKey className="h-6 w-6" />
              Environment Security
            </CardTitle>
            <CardDescription>
              Secure credential management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Environment Variables</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <Lock className="h-3 w-3" />
                  <span>AUTH_SECRET</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-3 w-3" />
                  <span>AUTH_GOOGLE_ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-3 w-3" />
                  <span>AUTH_GOOGLE_SECRET</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-3 w-3" />
                  <span>DATABASE_URL</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                All sensitive credentials stored in .env.local (not committed to Git)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-6 w-6" />
              User Privacy
            </CardTitle>
            <CardDescription>
              Data protection and privacy measures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Minimal Data Collection</h4>
                <p className="text-sm text-muted-foreground">
                  Only collect essential user data: name, email, and profile image
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Encrypted Database</h4>
                <p className="text-sm text-muted-foreground">
                  All data encrypted at rest in Vercel Neon Postgres
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Secure Transmission</h4>
                <p className="text-sm text-muted-foreground">
                  HTTPS enforced for all communications
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">No Third-Party Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  No analytics or tracking scripts beyond authentication
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Link href="/auth-setup" className="flex-1">
            <Card className="hover:border-primary cursor-pointer transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">← OAuth Setup</CardTitle>
                <CardDescription>
                  View authentication configuration
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
