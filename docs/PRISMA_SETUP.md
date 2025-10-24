# Prisma Setup Guide

## Database Configuration

This project uses Prisma ORM with Vercel Neon Postgres database.

### Environment Setup

1. Create a `.env` file in the root directory (already done):
   ```bash
   cp .env.example .env
   ```

2. Update the `DATABASE_URL` in `.env` with your Vercel Neon Postgres connection string:
   ```
   DATABASE_URL="postgresql://user:password@host.neon.tech/person_search?sslmode=require"
   ```

### Database Schema

The Person entity is defined in `prisma/schema.prisma` with the following fields:
- `id`: Unique identifier (CUID)
- `name`: Person's full name
- `email`: Unique email address
- `phoneNumber`: Australian mobile number format
- `createdAt`: Timestamp of creation
- `updatedAt`: Timestamp of last update

### Prisma Commands

Available npm scripts for database operations:

```bash
# Generate Prisma Client
pnpm db:generate

# Create and apply migrations
pnpm db:migrate

# Push schema changes without migration
pnpm db:push

# Open Prisma Studio (GUI for database)
pnpm db:studio

# Seed database with initial data
pnpm db:seed
```

### Initial Setup

After configuring your DATABASE_URL, run:

```bash
# Generate Prisma Client
pnpm db:generate

# Apply migrations
pnpm db:migrate

# Seed the database (optional)
pnpm db:seed
```

### Development Workflow

1. **Making Schema Changes**:
   - Edit `prisma/schema.prisma`
   - Run `pnpm db:migrate` to create and apply migration
   - Prisma Client is automatically regenerated

2. **Viewing Data**:
   - Run `pnpm db:studio` to open Prisma Studio
   - Browse and edit data in your browser

3. **Seeding Data**:
   - Edit `prisma/seed.ts` to customize initial data
   - Run `pnpm db:seed` to populate database

## Person Edit Feature

The comprehensive edit feature for Person entities is implemented using the MutableDialog component.

### Key Components

1. **MutableDialog** (`components/mutable-dialog.tsx`)
   - Reusable dialog component for both Add and Edit operations
   - Integrates with React Hook Form and Zod validation
   - Type-safe with generics
   - Automatic form reset on close

2. **UserEditDialog** (`app/components/user-edit-dialog.tsx`)
   - Specific implementation for editing Person entities
   - Uses MutableDialog with pre-filled default values
   - Calls `updateUser` server action
   - Displays success/error toasts

3. **UserDialog** (`app/components/user-dialog.tsx`)
   - Implementation for adding new Person entities
   - Uses MutableDialog with empty default values
   - Calls `addUser` server action

### Features

- **Form Validation**: Zod schema validation with inline error messages
- **Optimistic UI**: Toast notifications for success/error states
- **Revalidation**: Automatic page revalidation after mutations
- **Type Safety**: Full TypeScript support with type inference
- **Accessibility**: Built with Radix UI primitives

### Usage

The edit button appears on each User Card in the search results:

1. Search for a person
2. Click on a search result to view their card
3. Click the "Edit" button to open the edit dialog
4. Make changes and click "Save Changes"
5. The changes are persisted to the database and the UI updates

### Server Actions

All CRUD operations are implemented as server actions in `app/actions/actions.ts`:

- `searchUsers(query)`: Search for people by name
- `addUser(data)`: Create a new person
- `updateUser(id, data)`: Update an existing person
- `deleteUser(id)`: Delete a person
- `getUserById(id)`: Fetch a single person (cached)

All actions now use Prisma Client for database operations instead of in-memory arrays.
