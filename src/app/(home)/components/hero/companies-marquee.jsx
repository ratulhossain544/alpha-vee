import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const CompaniesMarquee = () => {
  return (
<div className="mt-auto w-[calc(100vw_-_60px)] lg:w-auto">
  <h3 className="text-lg text-muted-foreground mb-7">POWERING GROWTH FOR</h3>
      <div
      className="
        relative 
        [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]
      "
    >
      <Marquee speed={40} pauseOnHover={true} gradient={false}>
        {Array.from({ length: 10 }).map((_, i) => (
          <MarqueeItem key={i} />
        ))}
      </Marquee>
    </div>
</div>
  );
};

const MarqueeItem = () => {
  return (
    <div className="mx-12 flex items-center justify-center">
      <Image
        src="/companies/elevation-point-logo.svg"
        alt="Elevation Point"
        width={160}
        height={38}
        className="opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default CompaniesMarquee;
