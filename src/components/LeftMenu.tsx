import Sidebar from "./Sidebar";
import ProfileCard from "./ProfileCard";

const LeftMenu = ({
  type,
}: {
  type: "home" | "profile";
}) => {
  return (
    <div className="flex flex-col gap-4">
      {type === "home" && (
        <ProfileCard />
      )}
      <Sidebar />
    </div>
  );
};

export default LeftMenu;
