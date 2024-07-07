import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import React from "react";

const FriendRequests: React.FC = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-sm font-medium">
          Friend Requests
        </CardTitle>
        <Link
          href="#"
          className="text-sm text-blue-500"
          prefetch={false}
          style={{ marginTop: 0 }}
        >
          See all
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              FB
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">
              Fannie Bridges
            </p>
          </div>
          <div className="flex space-x-2">
            <CheckIcon className="text-blue-500" />
            <XIcon className="text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              EA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">
              Ethan Alvarado
            </p>
          </div>
          <div className="flex space-x-2">
            <CheckIcon className="text-blue-500" />
            <XIcon className="text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              CA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">
              Caroline Alexander
            </p>
          </div>
          <div className="flex space-x-2">
            <CheckIcon className="text-blue-500" />
            <XIcon className="text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CheckIcon: React.FC<
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

const XIcon: React.FC<
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default FriendRequests;
