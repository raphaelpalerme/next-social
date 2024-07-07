import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  LucideShare2,
} from "lucide-react";
import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center text-primary-foreground font-medium">
            JD
          </div>
          <span className="font-medium">
            John Doe
          </span>
        </div>
        <MoreHorizontal />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-6">
        <div className="w-full min-h-96 relative">
          <Image
            src="/black_hole.jpg"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
          Fugiat quaerat aliquam animi
          iusto quam impedit at
          blanditiis corporis,
          obcaecati, exercitationem
          eligendi ex sapiente odio
          totam numquam. Repellendus
          sequi nesciunt nemo.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <ThumbsUp
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-500">
              |
            </span>
            <span className="text-gray-500">
              123{" "}
              <span className="hidden md:inline">
                Likes
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <MessageCircle
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-500">
              |
            </span>
            <span className="text-gray-500">
              123{" "}
              <span className="hidden md:inline">
                Shares
              </span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <LucideShare2
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-500">
              |
            </span>
            <span className="text-gray-500">
              123{" "}
              <span className="hidden md:inline">
                Shares
              </span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
