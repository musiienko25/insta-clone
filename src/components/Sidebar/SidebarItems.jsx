import CreatePost from "./CreatPost";
import Home from "./Home";
import Notifications from "./Notifications";
import Search from "./Search";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Notifications />
      <Search />
      <CreatePost />
      {/* 
      <ProfileLink />  */}
    </>
  );
};

export default SidebarItems;
