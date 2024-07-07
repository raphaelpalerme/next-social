import Post from "./Post";
import { Card } from "./ui/card";

const Feed = () => {
  return (
    <Card className="p-4 flex flex-col gap-12 ">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Card>
  );
};

export default Feed;
