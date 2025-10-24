import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2, GitBranch, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function GitHubPage() {
  const repoUrl = "https://github.com/kevinfusko/person-search"
  const features = [
    "Google OAuth authentication with Auth.js v5",
    "Protected routes and middleware implementation",
    "Prisma ORM with Vercel Neon Postgres",
    "Full CRUD operations for Person entities",
    "MutableDialog component for forms",
    "Database-backed session management",
    "Comprehensive security implementation",
    "Professional UI with shadcn/ui components",
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">GitHub Repository</h1>
          <p className="text-muted-foreground text-lg">
            Complete source code with OAuth integration and documentation
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-8 w-8" />
              person-search
            </CardTitle>
            <CardDescription>
              Next.js 15 application with OAuth authentication and Person management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`${repoUrl}/tree/next15`} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="mr-2 h-4 w-4" />
                  next15 branch
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Code2 className="mr-1 h-3 w-3" />
                TypeScript
              </Badge>
              <Badge variant="secondary">Next.js 15</Badge>
              <Badge variant="secondary">React 19</Badge>
              <Badge variant="secondary">Auth.js v5</Badge>
              <Badge variant="secondary">Prisma</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6" />
              Key Features Implemented
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Repository Structure</CardTitle>
            <CardDescription>
              Organized codebase with clear separation of concerns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
              <div>📁 app/</div>
              <div className="ml-4">📁 actions/ - Server actions for CRUD</div>
              <div className="ml-4">📁 api/auth/ - Auth.js API routes</div>
              <div className="ml-4">📁 components/ - React components</div>
              <div className="ml-4">📁 auth/ - Authentication pages</div>
              <div className="ml-4">📄 page.tsx - Protected main page</div>
              <div>📁 components/</div>
              <div className="ml-4">📁 ui/ - shadcn/ui components</div>
              <div className="ml-4">📄 mutable-dialog.tsx - Reusable dialog</div>
              <div>📁 prisma/</div>
              <div className="ml-4">📄 schema.prisma - Database schema</div>
              <div className="ml-4">📁 migrations/ - Database migrations</div>
              <div className="ml-4">📄 seed.ts - Database seeding</div>
              <div>📁 docs/</div>
              <div className="ml-4">📄 AUTH_SETUP.md - Auth documentation</div>
              <div className="ml-4">📄 PRISMA_SETUP.md - Database docs</div>
              <div>📄 auth.ts - Auth.js configuration</div>
              <div>📄 middleware.ts - Route protection</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>OAuth Implementation Highlights</CardTitle>
            <CardDescription>
              Production-ready authentication system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Google OAuth Integration</h4>
              <p className="text-sm text-muted-foreground">
                Fully configured Google OAuth provider with proper callback URLs and consent flow
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Protected Routes</h4>
              <p className="text-sm text-muted-foreground">
                Next.js middleware enforces authentication for all Person CRUD operations
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Database Sessions</h4>
              <p className="text-sm text-muted-foreground">
                Prisma adapter manages sessions in Postgres for reliability and scalability
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Security Best Practices</h4>
              <p className="text-sm text-muted-foreground">
                CSRF protection, secure session tokens, encrypted credentials
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
            <CardDescription>
              How to run the project locally
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Clone the repository</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  git clone {repoUrl}.git
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Install dependencies</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  pnpm install
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Configure environment variables</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  cp .env.example .env.local
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Add your Google OAuth credentials and database URL
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Setup database</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                  <div>pnpm db:migrate</div>
                  <div>pnpm db:seed</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">5. Run development server</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  pnpm dev
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Branch Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GitBranch className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">next15</h4>
                  <p className="text-sm text-muted-foreground">
                    Main development branch with OAuth integration, Next.js 15, and React 19
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Button asChild size="lg" className="w-full">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Open GitHub Repository
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/auth-setup">
              <Card className="hover:border-primary cursor-pointer transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-lg">← OAuth Setup</CardTitle>
                  <CardDescription>
                    View authentication configuration
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/security">
              <Card className="hover:border-primary cursor-pointer transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Security Features →</CardTitle>
                  <CardDescription>
                    Learn about security implementation
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
