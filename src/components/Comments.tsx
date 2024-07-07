import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const Comments: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 w-full">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>
            AC
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Write a comment..."
            className="rounded-full pr-12"
          />
        </div>
        <Button
          type="submit"
          className="shrink-0"
        >
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">
            Send
          </span>
        </Button>
      </div>
      <div className="flex items-start space-x-4 p-4 border-b">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>
            DD
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">
                Dustin Davis
              </h4>
            </div>
            <MoreHorizontal />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Nemo minima, incidunt
            aperiam ad accusamus alias.
            Quam aut reprehenderit autem
            nam sed quas consequatur
            quidem facilis inventore at!
            Nam, natus sequi?
          </p>
          <div className="flex items-center mt-2 space-x-2 text-sm text-muted-foreground">
            <ThumbsUpIcon className="w-4 h-4" />
            <span>123 Likes</span>
            <span>·</span>
            <button className="text-blue-600">
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SendIcon: React.FC<
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
};
const MoveHorizontalIcon: React.FC<
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line
        x1="2"
        x2="22"
        y1="12"
        y2="12"
      />
    </svg>
  );
};

const ThumbsUpIcon: React.FC<
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
};

export default Comments;
