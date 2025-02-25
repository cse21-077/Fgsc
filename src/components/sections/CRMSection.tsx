import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function CRMSection() {
  return (
    <section>
      <div>
        <CustomHeader
          title="Who Are we?🤨"
          description="FutureGen Supply Chain Forum—a trailblazing event where youthful innovation meets industry excellence. Inspired by the renowned Botswana Supply Chain Summit, we bring together ambitious graduates, final-year students, and seasoned professionals to bridge the gap between untapped potential and the dynamic world of supply chain in Botswana and Africa."
        />
      </div>

      <div className="w-full flex justify-center my-[64px]">
        <img
          src="/images/crm.png"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
      </div>

      <div>
      </div>
    </section>
  );
}

export default CRMSection;
