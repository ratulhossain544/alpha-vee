import React from "react";
import Container from "../../../../components/container";
import Link from "next/link";
import { buttonVariants } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import CompaniesMarquee from "./companies-marquee";

const Hero = () => {
  return (
    <section className="overflow-hidden pt-[190px] pb-20 text-white w-full bg-gradient-to-r from-[#00214C] to-[#004399]">
      <Container>
        <div className="grid gap-x-20 gap-y-24 lg:grid-cols-2">
          <div className="lg:max-w-[550px] text-center lg:text-start mx-auto lg:mx-0 flex flex-col gap-20">
            <div>
              <h1 className="text-5xl sm:text-6xl leading-[115%] font-bold">
                Where <span className="text-primary">Innovation</span> <br />{" "}
                Meets Acceleration
              </h1>
              <p className="font-medium text-lg mt-5">
                For over 20 years, our portfolio technology, tax-aware
                investing, & advisor tools have helped firms grow and thrive.
              </p>
              <Link
                href="#"
                className={buttonVariants({
                  className: "mt-9 inline-flex items-center gap-2",
                })}
              >
                Contact Us
                <ArrowRight className="size-5" />
              </Link>
            </div>
            <CompaniesMarquee />
          </div>
          <div className="lg:scale-[1.7] lg:translate-x-[50px] lg:translate-y-[160px] pointer-events-none">
            <video className="w-full" autoPlay muted playsInline preload="auto">
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
