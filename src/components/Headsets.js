import React from "react";
import images from "../constant/images";

const { headset1, headset2, headset3, headset4 } = images;

function Headsets() {
  const headsets = [
    { image: headset1, title: "Metaverse", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat.", aosDelay: "1000" },
    { image: headset2, title: "AIoT", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat.", aosDelay: "1300" },
    { image: headset3, title: "HoloLens", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat.", aosDelay: "1600" },
    { image: headset4, title: "TPCASTT", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat.", aosDelay: "1900" },
  ];

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-down" data-aos-offset="300">
          Mixed Reality Headsets
        </h2>

        {/* Content Container (Grid) */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {headsets.map(({ image, title, description, aosDelay }, index) => (
            <div key={index} data-aos-delay={aosDelay} className="relative" data-aos="zoom-in" data-aos-offset="300">
              <img src={image} alt="Headsets Pics" />
              <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
                <h4 className="font-semibold text-xl mb-2">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Headsets;
