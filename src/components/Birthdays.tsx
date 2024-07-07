import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

const Birthdays: React.FC = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="">
        <CardTitle className="text-sm font-medium">
          Birthdays
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between pb-0">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              FB
            </AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">
            Fannie Bridges
          </div>
        </div>
        <Button
          variant="default"
          className="text-sm p-2"
          size="sm"
        >
          Celebrate
        </Button>
      </CardContent>
      <div className="p-4">
        <CardFooter className="mt-4 bg-muted p-3 rounded-md">
          <div className="flex items-center space-x-2">
            <GiftIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">
                Upcoming Birthdays
              </div>
              <div className="text-xs text-muted-foreground">
                See other 16 have
                upcoming birthdays
              </div>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

const GiftIcon: React.FC<
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
      <rect
        x="3"
        y="8"
        width="18"
        height="4"
        rx="1"
      />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
};

export default Birthdays;
