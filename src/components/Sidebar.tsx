import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
} from "./ui/card";
import { Separator } from "./ui/separator";

const Sidebar: React.FC = () => {
  return (
    <Card className="w-full p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <FileTextIcon className="w-5 h-5" />
                <span>My Posts</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <ActivityIcon className="w-5 h-5" />
                <span>Activity</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <ShoppingCartIcon className="w-5 h-5" />
                <span>Marketplace</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <CalendarIcon className="w-5 h-5" />
                <span>Events</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <ImageIcon className="w-5 h-5" />
                <span>Albums</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <VideoIcon className="w-5 h-5" />
                <span>Videos</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <NewspaperIcon className="w-5 h-5" />
                <span>News</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <BookIcon className="w-5 h-5" />
                <span>Courses</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <ListIcon className="w-5 h-5" />
                <span>Lists</span>
              </div>
            </Link>
          </li>
          <Separator className="my-2" />
          <li>
            <Link
              href="#"
              className="text-gray-700"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <SettingsIcon className="w-5 h-5" />
                <span>Settings</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

const ActivityIcon: React.FC<
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
};

const BookIcon: React.FC<
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
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

const FileTextIcon: React.FC<
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
};

const ImageIcon: React.FC<
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
};

const ListIcon: React.FC<
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
        x1="8"
        x2="21"
        y1="6"
        y2="6"
      />
      <line
        x1="8"
        x2="21"
        y1="12"
        y2="12"
      />
      <line
        x1="8"
        x2="21"
        y1="18"
        y2="18"
      />
      <line
        x1="3"
        x2="3.01"
        y1="6"
        y2="6"
      />
      <line
        x1="3"
        x2="3.01"
        y1="12"
        y2="12"
      />
      <line
        x1="3"
        x2="3.01"
        y1="18"
        y2="18"
      />
    </svg>
  );
};

const NewspaperIcon: React.FC<
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
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
};

const SettingsIcon: React.FC<
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

const ShoppingCartIcon: React.FC<
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
};

const VideoIcon: React.FC<
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
};

export default Sidebar;
