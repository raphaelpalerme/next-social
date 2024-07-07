import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

const UserInfoCard: React.FC<{
  userId: string;
}> = ({ userId }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-sm font-medium">
          User Information
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
        <div>
          <h2 className="text-lg font-bold">
            Elva Weaver{" "}
            <span className="text-sm font-normal text-gray-500">
              @lamadev
            </span>
          </h2>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet
            consectetur elit. Lorem
            ipsum, dolor sit amet
            consectetur adipisicing elit{" "}
            <span
              role="img"
              aria-label="smile"
            >
              😊
            </span>
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <LocateIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">
              Living in{" "}
              <span className="font-semibold text-gray-800">
                Denver
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCapIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">
              Went to{" "}
              <span className="font-semibold text-gray-800">
                Edgar High School
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <BriefcaseIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">
              Works at{" "}
              <span className="font-semibold text-gray-800">
                Apple Inc.
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon className="w-4 h-4 text-gray-500" />
            <Link
              href="#"
              className="text-sm text-blue-500"
              prefetch={false}
            >
              lama.dev
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">
              Joined November 2024
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-blue-500 text-white">
          Following
        </Button>
        <Button
          variant="ghost"
          className="text-red-500"
        >
          Block User
        </Button>
      </CardFooter>
    </Card>
  );
};

const BriefcaseIcon: React.FC<
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect
        width="20"
        height="14"
        x="2"
        y="6"
        rx="2"
      />
    </svg>
  );
};

const CalendarIcon: React.FC<
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect
        width="18"
        height="18"
        x="3"
        y="4"
        rx="2"
      />
      <path d="M3 10h18" />
    </svg>
  );
};

const GraduationCapIcon: React.FC<
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
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
};

const LinkIcon: React.FC<
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

const LocateIcon: React.FC<
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
        x1="2"
        x2="5"
        y1="12"
        y2="12"
      />
      <line
        x1="19"
        x2="22"
        y1="12"
        y2="12"
      />
      <line
        x1="12"
        x2="12"
        y1="2"
        y2="5"
      />
      <line
        x1="12"
        x2="12"
        y1="19"
        y2="22"
      />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
};

export default UserInfoCard;
