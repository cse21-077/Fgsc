import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function MultiPlayerDesignSection() {
  return (
    <section>
      <div>
        <CustomHeader
          title="SPONSORSHIP OPPORTUNITIES & PACKAGES"
          description="Sponsoring the FutureGen Supply Chain Forum is not just about brand visibility—it is about making a long-term impact on the future workforce and positioning your company as a leader in supply chain development."
        />
      </div>

      <div className="w-full flex flex-col gap-[28px] items-center justify-center my-[64px] bg-white">
        <img
          src="/images/d_2.png"
          alt="design image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
        {/* <img
          src="/images/d_2.png"
          alt="design image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        /> */}
      </div>

      <div>
      </div>
    </section>
  );
}

export default MultiPlayerDesignSection;
