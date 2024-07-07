import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";

const Ad: React.FC<{
  size: "sm" | "md" | "lg";
}> = ({ size }) => {
  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">
          Sponsored Ads
        </h2>
        <MoreHorizontal />
      </CardHeader>
      <div className="px-4">
        <img
          src="/nike-logo.jpg"
          alt="Ad Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              FB
            </AvatarFallback>
          </Avatar>
          <Link
            href="#"
            className="ml-2 text-blue-600 font-semibold"
            prefetch={false}
          >
            Nike Lounge
          </Link>
        </div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet
          consectetur adipiscing elit.
          Lorem ipsum dolor sit amet
          consectetur adipiscing elit.
        </p>
        <Button className="w-full py-2 text-center text-blue-600 border border-blue-600 rounded-l bg-transparent">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default Ad;
