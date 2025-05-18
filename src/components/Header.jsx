import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";
import { useNavigate } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between p-5">
      {/* Left: Logo + Menu */}
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderList key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderList key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden relative" onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div
                className="absolute top-10 left-0 z-10 bg-[#121212] 
                border border-gray-700 p-3 px-5 py-4 rounded-md"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderList key={item.name} name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: Avatar + Logout */}
      <div className="flex items-center gap-4">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="User"
          className="w-[40px] rounded-full"
        />
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-all text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
