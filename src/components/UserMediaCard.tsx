import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const UserMediaCard: React.FC<{
  userId: string;
}> = ({ userId }) => {
  return (
    <Card className="w-full max-w-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium">
          User Media
        </h2>
        <Link
          href="#"
          className="text-sm text-blue-500"
          prefetch={false}
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <img
          src="/black_hole.jpg"
          alt="Media 1"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 2"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 3"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 4"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 5"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 6"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 7"
          className="rounded-md"
        />
        <img
          src="/black_hole.jpg"
          alt="Media 8"
          className="rounded-md"
        />
      </div>
    </Card>
  );
};

export default UserMediaCard;
