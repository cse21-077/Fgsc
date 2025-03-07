import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";
import { HeroGlobeModal } from "../modals/HeroYoutubeModal";
import Link from "next/link";

function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8"
          )}
        >
          Future-Ready <br /> Industry-Connected
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Empowering the Next Generation of Supply Chain Leaders in Africa
        </p>

        <div className="flex gap-[12px] justify-center">
          <Link href="/registration-form">
            <MainButton
              text="Register Now"
              size="small"
              className="bg-customBlue border-none rounded-[12px]"
            />
          </Link>
          <a href="https://wa.me/+26771902231" target="_blank" rel="noopener noreferrer">
            <MainButton
              text="Become a Sponsor"
              size="small"
              className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
            />
          </a>
        </div>

        <div className="flex w-full justify-center">
          <HeroGlobeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
