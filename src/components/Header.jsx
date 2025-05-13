import logo from "../assets/Images/logo.png";
import avatar from "../assets/Images/boy.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

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
      icon: HiTv,
    },
    {
      name: "SERIES",
      icon: HiPlayCircle,
    },
  ];

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className="flex items-start justify-between gap-8 h-screen w-screen p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover cursor-pointer"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => {
            return <HeaderList name={item.name} Icon={item.icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map((item, index) => {
            return index < 3 && <HeaderList name={""} Icon={item.icon} />;
          })}

          <div className="md:hidden" onClick={handleClick}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
                {menu.map((item, index) => {
                  return (
                    index >= 3 && (
                      <HeaderList name={item.name} Icon={item.icon} />
                    )
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={avatar} className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
