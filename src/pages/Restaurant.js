import React, { useState } from "react";
import AccordionDemo2 from "../components/Accordion";
import DialogDemo from "../components/DialogDemo";

const Restaurant = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 relative my-4">
      <div className="w-full max-w-4xl text-center flex justify-center items-center flex-col">
        <p className="font-bold text-5xl w-full text-center ">
          Rambagh Golf Club
        </p>
        <p></p>
      </div>
      <p className="w-full text-center font-semibold underline text-2xl">
        MENU
      </p>
      <AccordionDemo2
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
      <div className="fixed bottom-10 ">
        <DialogDemo
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        />
      </div>{" "}
    </div>
  );
};

export default Restaurant;
