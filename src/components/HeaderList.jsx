import React from "react";

const HeaderList = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-start gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <h2 className="hidden md:block">{name}</h2>
    </div>
  );
};

export default HeaderList;
