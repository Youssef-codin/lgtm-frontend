import { createFileRoute, Outlet } from '@tanstack/react-router';
import { TopBar } from '@/components/layout/TopBar';

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
}
