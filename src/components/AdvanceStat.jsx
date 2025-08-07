import React from "react";
import brandImg from "../assets/icon-brand-recognition.svg";
import detailedImg from "../assets/icon-detailed-records.svg";
import customImg from "../assets/icon-fully-customizable.svg";

// AdvanceStat component displays three feature cards under "Advanced Statistics"
const AdvanceStat = () => {
  // Data for each statistics card
  const statsData = [
    {
      img: brandImg,
      title: "Brand Recongnition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
    },
    {
      img: detailedImg,
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
    },
    {
      img: customImg,
      title: "Fully Customizable",
      description:
        "Imporve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  // Different translateY positions to stagger card heights for visual appeal
  const translateClasses = [
    "md:translate-y-[-1rem]",
    "md:translate-y-[1rem]",
    "md:translate-y-[3rem]",
  ];

  return (
    // Section wrapper with max width and spacing
    <section className="max-w-[1000px] px-8 mx-auto mb-[8rem]">
      <div>
        {/* Title and description */}
        <div className="max-w-[500px] mb-[5rem] mx-auto text-center">
          <h2 className="font-bold text-2xl mb-3">Advanced Statistics</h2>
          <p className="text-gray-400">
            Track how your links are perfroming across the web with our advanced
            statistics dashboard
          </p>
        </div>

        {/* Cards container with connecting line using pseudo-element */}
        <div
          className="relative flex flex-col md:flex-row gap-[3rem] md:gap-5 
          after:content-[''] after:absolute after:left-1/2 after:0 md:after:top-1/2 
          after:translate-x-[-50%] after:h-[100%] md:after:h-[5px] 
          after:w-[5px] md:after:w-full after:bg-blue-400 after:z-[-1]"
        >
          {/* Map through each stat item and render its card */}
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relaive pt-[4rem] pb-5 px-5 bg-white max-w-[100%] rounded-md flex flex-col md:block items-center ${
                translateClasses[index] || ""
              }`}
            >
              {/* Icon inside a circle */}
              <div className="absolute w-[70px] h-[70px] flex items-center justify-center rounded-full bg-blue-950 translate-y-[-6rem]">
                <img src={stat.img} alt={stat.img} className="" />
              </div>

              {/* Title and description */}
              <div className="flex flex-col gap-3 items-center text-center md:items-start md:text-left ">
                <h3 className="font-bold">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvanceStat;
