import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  MessageCircle,
  Bell,
  Users,
} from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-16 bg-white border-b px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Link
        href="#"
        className="flex items-center gap-2"
        prefetch={false}
      >
        <span className="text-lg font-bold">
          METACAGOUL
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link
          href="#"
          className="hover:text-primary"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="hover:text-primary"
          prefetch={false}
        >
          Friends
        </Link>
        <Link
          href="#"
          className="hover:text-primary"
          prefetch={false}
        >
          Groups
        </Link>
        <Link
          href="#"
          className="hover:text-primary"
          prefetch={false}
        >
          Stories
        </Link>
        <Link
          href="#"
          className="hover:text-primary"
          prefetch={false}
        >
          Profile
        </Link>
      </nav>
      <div className="flex items-center justify-center">
        <form className="relative hidden lg:block">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </form>
      </div>
      <div className="flex items-center justify-between gap-4">
        <ClerkLoading>
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Users
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <div className="cursor-pointer">
              <MessageCircle
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <div className="cursor-pointer">
              <Bell
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="sign-in">
              <Button className="hidden md:inline-flex">
                Login
              </Button>
            </Link>
          </SignedOut>
        </ClerkLoaded>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">
                Toggle menu
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] bg-background p-6"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-lg font-medium hover:text-primary"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-lg font-medium hover:text-primary"
                prefetch={false}
              >
                Friends
              </Link>
              <Link
                href="#"
                className="text-lg font-medium hover:text-primary"
                prefetch={false}
              >
                Groups
              </Link>
              <Link
                href="#"
                className="text-lg font-medium hover:text-primary"
                prefetch={false}
              >
                Stories
              </Link>
              <Link
                href="#"
                className="text-lg font-medium hover:text-primary"
                prefetch={false}
              >
                Profile
              </Link>
            </div>
            <div className="mt-6 border-t pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Dark Mode
                </span>
                <Switch />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const MenuIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
      />
      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
      />
      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
      />
    </svg>
  );
};

const SearchIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

export default Navbar;
