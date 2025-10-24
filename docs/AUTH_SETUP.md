# Auth.js (NextAuth v5) Setup Guide

## Overview

This project uses Auth.js v5 (NextAuth beta) for authentication with support for:
- GitHub OAuth
- Google OAuth
- Email/Password (Credentials)
- Prisma adapter for database sessions

## Installation

The following packages have been installed:
- `next-auth@beta` - Authentication library
- `@auth/prisma-adapter` - Prisma adapter for Auth.js

## Configuration

### 1. Environment Variables

The `.env.local` file contains:
```bash
AUTH_SECRET="your-secret-key"  # Auto-generated

# Optional OAuth providers
AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""
```

### 2. Database Schema

Auth.js models added to `prisma/schema.prisma`:
- `User` - User accounts
- `Account` - OAuth account connections
- `Session` - User sessions
- `VerificationToken` - Email verification tokens

Migration applied: `20251024073552_add_auth_tables`

### 3. Auth Configuration

Main auth config in `auth.ts`:
- Providers: GitHub, Google, Credentials
- Session strategy: JWT
- Custom sign-in page: `/auth/signin`
- Prisma adapter for database integration

### 4. API Routes

Auth API routes: `/api/auth/[...nextauth]/route.ts`
- Handles all auth requests (signin, signout, callback, etc.)

### 5. Middleware

`middleware.ts` protects routes:
- Public routes: `/`, `/about`, `/auth/signin`
- Protected routes redirect to `/auth/signin`

## Usage

### Sign In Page

Located at `/auth/signin` with three options:
1. **GitHub OAuth** - Sign in with GitHub account
2. **Google OAuth** - Sign in with Google account
3. **Email/Password** - Basic credentials authentication

### User Button Component

`app/components/user-button.tsx`:
- Shows "Sign In" button when logged out
- Shows user avatar and dropdown menu when logged in
- Dropdown includes: Profile, Settings, Sign Out

Added to navbar for easy access.

### Getting Session

In server components:
```typescript
import { auth } from '@/auth'

const session = await auth()
if (session?.user) {
  // User is authenticated
}
```

In client components:
```typescript
import { useSession } from 'next-auth/react'

const { data: session, status } = useSession()
```

### Protecting Server Actions

```typescript
import { auth } from '@/auth'

export async function protectedAction() {
  const session = await auth()
  if (!session) {
    throw new Error('Unauthorized')
  }
  // Your protected logic here
}
```

## Setting Up OAuth Providers

### GitHub OAuth

1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Set:
   - Application name: `Person Search`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env.local`:
   ```
   AUTH_GITHUB_ID="your_client_id"
   AUTH_GITHUB_SECRET="your_client_secret"
   ```

### Google OAuth

1. Go to https://console.cloud.google.com/apis/credentials
2. Create a new project (if needed)
3. Click "Create Credentials" > "OAuth 2.0 Client ID"
4. Set:
   - Application type: Web application
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
5. Copy Client ID and Client Secret to `.env.local`:
   ```
   AUTH_GOOGLE_ID="your_client_id"
   AUTH_GOOGLE_SECRET="your_client_secret"
   ```

## Features Implemented

✅ Multiple authentication providers
✅ Database-backed sessions with Prisma
✅ Protected routes via middleware
✅ User dropdown menu in navbar
✅ Custom sign-in page
✅ Session display on homepage
✅ Automatic redirect to sign-in for protected pages

## Security Notes

1. **Production Setup**:
   - Update `AUTH_SECRET` for production
   - Use HTTPS for OAuth callbacks
   - Set proper CORS policies

2. **Credentials Provider**:
   - Current implementation is basic
   - Add password hashing (bcrypt, argon2)
   - Implement proper user registration flow
   - Add email verification

3. **Session Security**:
   - JWT tokens are signed with `AUTH_SECRET`
   - Sessions stored in database for revocation
   - Automatic session refresh

## Testing Authentication

1. Start dev server: `pnpm dev`
2. Navigate to http://localhost:3000
3. Click "Sign In" button in navbar
4. Choose authentication method:
   - For OAuth: Configure providers first
   - For Credentials: Use any email/password (basic example)

## Troubleshooting

### OAuth not working
- Ensure client IDs and secrets are set in `.env.local`
- Check callback URLs match exactly
- Verify OAuth apps are not restricted

### Session not persisting
- Check database connection
- Ensure Prisma migrations are applied
- Verify `AUTH_SECRET` is set

### Middleware redirect loop
- Check public routes configuration in `middleware.ts`
- Ensure `/auth/signin` is public

## Next Steps

1. **Enhance Credentials Provider**:
   - Add password hashing
   - Create registration page
   - Implement email verification

2. **User Profile**:
   - Create profile page
   - Allow users to update info
   - Link/unlink OAuth accounts

3. **Role-Based Access Control**:
   - Add roles to User model
   - Protect admin routes
   - Implement permissions system

4. **Session Management**:
   - Show active sessions
   - Allow session revocation
   - Implement "Sign out all devices"
