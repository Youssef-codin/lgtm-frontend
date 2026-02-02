import { createFileRoute } from '@tanstack/react-router';
import { CheckCircle, Eye, GitBranch, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { handleLogin } from '@/lib/sign-in';
import { ShineBorder } from '@/components/ui/shineBorderCard';
import { Logo } from '../components/ui/logo';

export const Route = createFileRoute('/auth')({
  component: AuthRoute,
});

function AuthRoute() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-md w-full px-6 bg-transparent">
        <AuthCard />
      </div>
    </div>
  );
}

function AuthCard() {
  return (
    <Card className="border border-border bg-card/50 p-8 relative overflow-hidden">
      <ShineBorder shineColor={['var(--primary)', 'var(--background)']} />
      <CardHeader className="p-0 ">
        <Logo size="text-4xl" />
        <CardTitle className="pt-14 text-3xl font-bold text-foreground mb-0">
          Welcome
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Sign in to continue to your boards
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 pt-2 space-y-8">
        <Button
          onClick={handleLogin}
          size="lg"
          className="w-full gap-2 py-5 text-base font-semibold cursor-pointer"
        >
          <Github className="h-5 w-5" />
          Sign in with GitHub
        </Button>
        <Divider />
        <Permissions />
      </CardContent>
      <CardFooter />
    </Card>
  );
}

function Divider() {
  return (
    <div>
      <div className="relative flex items-center mb-3">
        <div className="grow border-t border-border"></div>
        <span className="shrink mx-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Why we need access
        </span>
        <div className="grow border-t border-border"></div>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        We only request the minimum permissions needed
      </p>
    </div>
  );
}

function Permissions() {
  return (
    <div className="space-y-3">
      <PermissionItem
        icon={<Eye className="h-4 w-4" />}
        title="Read repository data"
        description="View repo info, branches, and PRs"
        color="text-primary"
      />
      <PermissionItem
        icon={<GitBranch className="h-4 w-4" />}
        title="Create & update PRs"
        description="Open new PRs and update existing ones"
        color="text-primary"
      />
      <PermissionItem
        icon={<CheckCircle className="h-4 w-4" />}
        title="Read CI status"
        description="Display build and test results"
        color="text-success"
      />
    </div>
  );
}

function PermissionItem({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 ${color}`}>{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
