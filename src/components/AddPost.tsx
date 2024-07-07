import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { Card } from "./ui/card";

export default function AddPost(): JSX.Element {
  return (
    <Card className="flex flex-col items-start gap-4 p-4">
      <div className="flex items-center w-full gap-2">
        <div className="flex-1">
          <Input
            placeholder="What's on your mind?"
            className="bg-muted border-none focus:ring-0"
          />
        </div>
        <Button>Post</Button>
      </div>
      <div className="flex items-start justify-start w-full gap-4">
        <Button>
          <ImageIcon className="w-4 h-4" />
          <span className="sr-only">
            Upload Photo
          </span>
        </Button>
        <Button>
          <VideoIcon className="w-4 h-4" />
          <span className="sr-only">
            Upload Video
          </span>
        </Button>
        <Button>
          <CalendarIcon className="w-4 h-4" />
          <span className="sr-only">
            Add Event
          </span>
        </Button>
      </div>
    </Card>
  );
}

function CalendarIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
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
}

function ImageIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
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
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        ry="2"
      />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function VideoIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect
        x="2"
        y="6"
        width="14"
        height="12"
        rx="2"
      />
    </svg>
  );
}
