import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex items-start justify-start gap-4 p-4 ">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] flex flex-col gap-4">
        <Card className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                alt="Cover Image"
                src="/cover_image.jpg"
                fill
                className="object-cover rounded-t-md"
              />
              <Avatar className="w-32 h-32 border-4 border-background absolute left-0 right-0 m-auto -bottom-16">
                <AvatarImage />
                <AvatarFallback className="bg-black text-white text-2xl font-medium">
                  RP
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Raphaël Palerme
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  123
                </span>
                <span className="text-sm">
                  Posts
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  1.2K
                </span>
                <span className="text-sm">
                  Followers
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  1.3K
                </span>
                <span className="text-sm">
                  Following
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Feed />
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="123" />
      </div>
    </div>
  );
};

export default ProfilePage;
