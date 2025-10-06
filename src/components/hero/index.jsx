import React from "react";
import Container from "../container";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-[700px] overflow-hidden pt-[160px] text-white w-full bg-gradient-to-r from-[#00214C] to-[#004399]">
      <Container>
        <div className="flex flexjustify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-[550px]">
            <h1 className="text-5xl sm:text-6xl leading-[115%] font-bold">
              Where <span className="text-primary">Innovation</span> <br /> Meets
              Acceleration
            </h1>
            <p className="font-medium text-lg mt-5">
              For over 20 years, our portfolio technology, tax-aware investing,
              & advisor tools have helped firms grow and thrive.
            </p>
            <Link href="#" className={buttonVariants({ className: "mt-9 inline-flex items-center gap-2" })}>
              Contact Us
              <ArrowRight className="size-5" />
            </Link>
          </div>
          <div className="w-[65%] translate-x-[250px]">
            <video
              className="w-full"
              autoPlay
              muted
              playsInline
              preload="auto"
            >
         <source src="/hero-reveal-wave.webm" type="video/webm" />

              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
