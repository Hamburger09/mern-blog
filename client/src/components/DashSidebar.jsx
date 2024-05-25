import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Sidebar } from "flowbite-react";
import { FaUserTie } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search, tab]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col">
          <Link to={"/dashboard?tab=profile"}>
            <Sidebar.Item
              active={tab === "profile"}
              icon={FaUserTie}
              label={"User"}
              labelColor="dark"
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Link to={"/dashboard?tab=settings"}>
            <Sidebar.Item active={tab === "settings"} icon={IoSettings} as='div'>
              Settings
            </Sidebar.Item>
          </Link>
          <Link to={'/dashboard?tab=logout'}>
          
          <Sidebar.Item
            active={tab === "logout"}
            icon={IoIosLogOut}
            as='div'
            >
            Sign Out
          </Sidebar.Item>
              </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
