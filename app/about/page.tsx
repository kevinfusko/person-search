import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Database, Lock, Code2, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">About Person Search</h1>
          <p className="text-muted-foreground text-lg">
            A modern, secure person management application with OAuth authentication
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Application Overview</CardTitle>
            <CardDescription>
              Full-stack Next.js application demonstrating enterprise-grade authentication and CRUD operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Person Search is a production-ready application built with Next.js 15, React 19, and Auth.js v5. 
              It demonstrates best practices for OAuth authentication, database integration, and secure user 
              session management. The application allows authenticated users to manage a directory of people 
              with full CRUD (Create, Read, Update, Delete) capabilities.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js 15</Badge>
              <Badge variant="secondary">React 19</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Auth.js v5</Badge>
              <Badge variant="secondary">Prisma ORM</Badge>
              <Badge variant="secondary">Postgres</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Authentication Architecture
            </CardTitle>
            <CardDescription>
              OAuth 2.0 with Google and database-backed sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">Auth.js v5 (NextAuth)</h4>
                <p className="text-sm text-muted-foreground">
                  Industry-standard authentication library with OAuth 2.0 support, built-in security features,
                  and seamless Next.js integration.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">Google OAuth Provider</h4>
                <p className="text-sm text-muted-foreground">
                  Secure authentication using Google accounts. Users authenticate through Google's servers,
                  eliminating password management concerns and leveraging Google's security infrastructure.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">Prisma Adapter</h4>
                <p className="text-sm text-muted-foreground">
                  Database-backed session management using Prisma ORM. Sessions are persisted in Postgres,
                  allowing for reliable session tracking, revocation, and cross-device management.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">Protected Routes</h4>
                <p className="text-sm text-muted-foreground">
                  Next.js middleware enforces authentication requirements. All Person CRUD operations require
                  valid authentication, with automatic redirection to sign-in for unauthenticated users.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Authentication Flow</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>User clicks "Sign in with Google"</li>
                <li>Redirect to Google's OAuth consent page</li>
                <li>User authenticates and grants permissions</li>
                <li>OAuth callback creates/updates user in database</li>
                <li>Session stored in database with secure token</li>
                <li>User redirected to application with authenticated session</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              Database Architecture
            </CardTitle>
            <CardDescription>
              Prisma ORM with Vercel Neon Postgres
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold mb-1">Person Entity</h4>
                <p className="text-sm text-muted-foreground">
                  Core data model for managing people with fields: name, email, phone number, timestamps.
                  Full CRUD operations protected by authentication.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-1">Auth Tables</h4>
                <p className="text-sm text-muted-foreground">
                  User accounts, OAuth connections, sessions, and verification tokens managed by Auth.js
                  with Prisma adapter.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold mb-1">Migrations</h4>
                <p className="text-sm text-muted-foreground">
                  Version-controlled database schema changes using Prisma Migrate for reliable deployments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="border rounded-lg p-3 text-center">
                <div className="font-bold text-2xl text-primary">5</div>
                <div className="text-xs text-muted-foreground">Tables</div>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="font-bold text-2xl text-primary">2</div>
                <div className="text-xs text-muted-foreground">Migrations</div>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="font-bold text-2xl text-primary">10</div>
                <div className="text-xs text-muted-foreground">Seed Records</div>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="font-bold text-2xl text-primary">∞</div>
                <div className="text-xs text-muted-foreground">Scalability</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Security Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-0.5">✓</div>
                  <span>OAuth 2.0 authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-0.5">✓</div>
                  <span>Database-backed sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-0.5">✓</div>
                  <span>Protected route middleware</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-0.5">✓</div>
                  <span>CSRF protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-0.5">✓</div>
                  <span>Encrypted credentials</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Development Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="text-primary mt-0.5">→</div>
                  <span>Next.js 15 App Router</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-primary mt-0.5">→</div>
                  <span>React Server Components</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-primary mt-0.5">→</div>
                  <span>Server Actions for mutations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-primary mt-0.5">→</div>
                  <span>TypeScript for type safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-primary mt-0.5">→</div>
                  <span>Zod for validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="text-yellow-600 mt-0.5">⚡</div>
                  <span>Edge-optimized middleware</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-yellow-600 mt-0.5">⚡</div>
                  <span>React Server Components</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-yellow-600 mt-0.5">⚡</div>
                  <span>Optimistic UI updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-yellow-600 mt-0.5">⚡</div>
                  <span>Database connection pooling</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-yellow-600 mt-0.5">⚡</div>
                  <span>Turbopack for fast builds</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="text-blue-600 mt-0.5">★</div>
                  <span>Clean, modern UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-600 mt-0.5">★</div>
                  <span>Dark/light mode support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-600 mt-0.5">★</div>
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-600 mt-0.5">★</div>
                  <span>Toast notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-600 mt-0.5">★</div>
                  <span>Form validation feedback</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Google OAuth authentication</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Protected CRUD operations</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Database session management</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Secure logout with cleanup</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Real-time form validation</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Responsive user interface</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Search functionality</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-0.5 font-bold">✓</div>
                <span className="text-sm">Professional documentation</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/auth-setup">
            <Card className="hover:border-primary cursor-pointer transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-lg">OAuth Setup</CardTitle>
                <CardDescription>
                  Authentication configuration
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/security">
            <Card className="hover:border-primary cursor-pointer transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-lg">Security</CardTitle>
                <CardDescription>
                  Protected routes & features
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/github">
            <Card className="hover:border-primary cursor-pointer transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-lg">GitHub</CardTitle>
                <CardDescription>
                  Source code repository
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

