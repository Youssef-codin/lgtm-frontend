import { HelpCircle, LogOut, Plus, Settings } from 'lucide-react';
import { AvatarGroup } from '../animate-ui/components/animate/avatar-group';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from 'lucide-react';

function TopBar() {
  return (
    <div className="relative z-50">
      <div className="bun-blob" />

      <header className="w-full h-16 border-b backdrop-blur-xl bg-background/80 border-border sticky top-0 z-20 flex items-center justify-between px-4">
        <LeftSection />
        <CenterSection />
        <RightSection />
      </header>

      <div className="bun-gradient-line" />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="flex items-center gap-2 px-8">
      <div className="w-fit logo font-bold text-xl ">
        <span className="text-primary">lg</span>
        <span className="text-foreground">tm</span>
      </div>
    </div>
  );
}

function CenterSection() {
  return <div className="flex items-center gap-2"></div>;
}

function RightSection() {
  return (
    <div className="flex items-center gap-2 px-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full focus-visible:ring-0"
          >
            <Avatar>
              <AvatarImage src="" alt="C" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellIcon />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function AvatarMenu() {}

export { TopBar };
