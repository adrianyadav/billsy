import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSearch, IconBell, IconUser, IconStethoscope } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b bg-white w-full">
      <div className="flex w-full items-center gap-4 px-4 lg:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <IconStethoscope className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg text-blue-600">Billsy</span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search patients, invoices..."
              className="pl-9 w-full"
            />
          </div>
        </div>

        {/* Right: Notifications and User Profile */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <IconBell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 h-auto">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="Dr. Sarah Johnson" />
                  <AvatarFallback>
                    <IconUser className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium">Dr. Sarah Johnson</div>
                  <div className="text-xs text-muted-foreground">Administrator</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Dr. Sarah Johnson</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Administrator
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    sarah.johnson@clinic.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}