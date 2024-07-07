import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Card } from "./ui/card";

const Stories = () => {
  return (
    <Card className="w-full">
      <div className="flex items-start justify-center gap-4 py-4 overflow-scroll scrollbar-hide text-center">
        <Link
          href="#"
          className="flex flex-col items-center gap-2"
          prefetch={false}
        >
          <Avatar className="w-16 h-16 border-4 border-background">
            <AvatarImage />
            <AvatarFallback className="bg-black text-white">
              RP
            </AvatarFallback>
          </Avatar>

          <div className="text-sm font-medium">
            Your Story
          </div>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-2"
          prefetch={false}
        >
          <Avatar className="w-16 h-16 border-2 border-background">
            <AvatarImage />
            <AvatarFallback className="bg-black text-white">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">
            John Doe
          </div>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-2"
          prefetch={false}
        >
          <Avatar className="w-16 h-16 border-2 border-background">
            <AvatarImage />
            <AvatarFallback className="bg-black text-white">
              JS
            </AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">
            Jane Smith
          </div>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-2"
          prefetch={false}
        >
          <Avatar className="w-16 h-16 border-2 border-background">
            <AvatarImage />
            <AvatarFallback className="bg-black text-white">
              BJ
            </AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">
            Bob Johnson
          </div>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-2"
          prefetch={false}
        >
          <Avatar className="w-16 h-16 border-2 border-background">
            <AvatarImage />
            <AvatarFallback className="bg-black text-white">
              SL
            </AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">
            Sarah Lee
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default Stories;
