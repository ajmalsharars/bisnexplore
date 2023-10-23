import Header from "../dcomponents/Header";
import Sidebar from "../dcomponents/Sidebar";
import Post from "../dcomponents/Post";
import RightSidebar from "../dcomponents/RightSidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex flex-row gap-5 justify-center">
        <Sidebar />
        <Post />
        <RightSidebar />
      </div>
    </div>
  );
};

export default page;
