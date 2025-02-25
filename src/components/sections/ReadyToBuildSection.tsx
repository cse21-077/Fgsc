import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";

function ReadyToBuildSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center !bg-[#266DF0]  px-4 md:px-[94px]">
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "text-[40px] leading-tight md:leading-normal text-[#A0BFF8]"
          )}
        >
          Just Wanna Talk?
          <span className="text-white">Contact Us</span>
        </p>
        <div className="flex gap-[12px] justify-start mt-[32px]">
          <MainButton
            text="Email Us"
            size="small"
            className="border-none rounded-[12px] bg-primary/40 hover:bg-[#538BF3]/40"
          />
        
        </div>
      </div>
      <div>
        <img src="/images/ready_to_build.png" alt="security" />
      </div>
    </section>
  );
}

export default ReadyToBuildSection;
