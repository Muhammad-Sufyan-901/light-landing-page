import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import icons from "../constant/icons";
import "../modal-video/modalVideo.scss";

const { BsPlayCircleFill } = icons;

function Video() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-between">
          <h3 className="text-2xl font-semibold mb-8 lg:mb-0" data-aos="fade-right" data-aos-offset="350">
            Awesome Experiences With Virtual Reality World
          </h3>
          {/* Modal Video */}
          <ModalVideo isOpen={isOpen} onClose={() => setIsOpen(false)} channel="youtube" videoId="NOk_M1Ib5F0" autoplay />

          {/* Video */}
          <div className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex justify-center items-center" data-aos="fade-left" data-aos-offset="350">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
