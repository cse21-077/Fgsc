import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";

function SecurityScaleSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center">
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "text-[40px] leading-tight md:leading-normal text-primary"
          )}
        >
          Become A <span className="text-gray-500">Sponsor</span>
        </p>
        <p className="text-[20px] text-primary mt-1.5 mb-6">
        We also welcome custom sponsorship proposals and in-kind contributions (such as providing technology, venue, marketing support, or training resources). Let`s discuss how we can create a partnership tailored to your company`s objectives!
        </p>

        <div className="flex gap-[12px] justify-start">
          <MainButton
            text="Contact Us"
            size="small"
            className="border-none rounded-[12px]"
          />
          
        </div>
      </div>
    </section>
  );
}

export default SecurityScaleSection;
