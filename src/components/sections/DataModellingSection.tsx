import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function DataModellingSection() {
  return (
    <section>
      <div>
        <CustomHeader
          title="The Forum"
          description="The FutureGen Supply Chain Forum 2024 marks the beginning of a movement—a bold initiative designed to bridge the gap between young talent and the dynamic world of supply chain management. This is not just an event; it is the foundation for a future of innovation, collaboration, and opportunity."
        />
      </div>

      <div className="w-full flex flex-col gap-[28px] items-center justify-center my-[64px] bg-white">
        <img
          src="/images/d_1.png"
          alt="forum data"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
        {/* <img
          src="/images/m_2.png"
          alt="forum data 2"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        /> */}
      </div>

      <div>
      </div>
    </section>
  );
}

export default DataModellingSection;
