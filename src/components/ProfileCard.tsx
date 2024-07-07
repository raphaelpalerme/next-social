import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const ProfileCard: React.FC = () => {
  return (
    <Card className="w-full flex flex-col p-1 text-sm gap-6">
      <div className="relative h-24">
        <Image
          src="/cover_image.jpg"
          alt="Cover image"
          fill
          className="object-cover w-full h-full rounded-t-md"
        />
        <Avatar className="w-12 h-12 border-2 border-background absolute left-0 right-0 m-auto -bottom-6">
          <AvatarImage />
          <AvatarFallback className="bg-black text-white">
            RP
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <span className="font-semibold">
          Raphaël Palerme
        </span>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 text-red-500" />
          <StarIcon className="w-4 h-4 text-red-500" />
          <StarIcon className="w-4 h-4 text-red-500" />
          <span className="text-xs text-muted-foreground">
            500 followers
          </span>
        </div>
        {/* <Button className="text-xs p-2 rounded-md">
          My Profile
        </Button> */}
      </div>
    </Card>
  );
};

const StarIcon: React.FC<
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default ProfileCard;
