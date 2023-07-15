import React from "react";
import icons from "../constant/icons";
import images from "../constant/images";

const { BsFillCircleFill } = icons;
const { avatar1, avatar2, avatar3, avatar4 } = images;

function Users() {
  const users = [avatar1, avatar2, avatar3, avatar4];

  return (
    <div className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start" data-aos="fade-down" data-aos-delay="900">
      <div className="flex -space-x-2">
        {users.map((avatar, index) => (
          <div key={index} className="w-12 h-12 rounded-full">
            <img src={avatar} alt="Users Avatar" />
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
        <div>400K People Online</div>
      </div>
    </div>
  );
}

export default Users;
