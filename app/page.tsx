import UserSearch from './components/user-search';
import { TechnicalOverview } from './components/technical-overview';
import { UserDialog } from './components/user-dialog';
import { auth } from '@/auth';

export default async function Home({ searchParams }: { searchParams: Promise<{ userId?: string }> }) {
  const session = await auth()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">User Search</h1>
        {session?.user && (
          <p className="text-sm text-muted-foreground">
            Welcome back, {session.user.name || session.user.email}!
          </p>
        )}
      </div>
      <UserSearch searchParams={searchParams} />
      <UserDialog />
      <TechnicalOverview />
    </div>
  );
}
