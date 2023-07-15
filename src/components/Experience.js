import React from "react";
import images from "../constant/images";

const { experienceImage1, experienceImage2 } = images;

function Experience() {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* Images */}
            <div className="self-start" data-aos="fade-down" data-aos-offset="400">
              <img src={experienceImage1} alt="Experience Pics" />
            </div>
            <div className="self-end" data-aos="fade-up">
              <img src={experienceImage2} alt="Experience Pics" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0" data-aos="fade-left" data-aos-offset="400">
            <h2 className="text-3xl font-bold mb-6">New Experience of Digital World</h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla dicta perspiciatis amet. Ad eveniet eius rerum enim iste, voluptatem cum assumenda molestias eaque, quod odit accusantium cumque, ut autem!
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
