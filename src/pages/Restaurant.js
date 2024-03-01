import React, { useState } from "react";
import AccordionDemo2 from "../components/Accordion";
import DialogDemo from "../components/DialogDemo";
import SwitchDemo from "../components/SwitchDemo";

const Restaurant = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 relative py-6 p-2 font-Raleway bg-slate-50">
      <p className="w-full text-xs font-extralight text-start max-w-3xl">
        Home / Jaipur / Chinese Wok
      </p>
      <div className="w-full max-w-3xl text-center flex justify-center items-center my-8 flex-col">
        <p className="font-bold text-2xl w-full text-start text-[#02060CEB] font-Poppins">
          CHINESE WOK
        </p>
        <p></p>
      </div>
      <div className="w-full max-w-3xl flex flex-col justify-center gap-6 items-center border-b-2 pb-5 border-dashed border-[#d3d3d3]">
        <div className="w-full flex justify-between items-center ">
          <div className="w-fit flex flex-col justify-center gap-1 items-start text-[#282c3f]">
            <p className="font-semibold text-lg">Chinese Wok</p>
            <p className="font-normal text-sm text-[#7e808c]">Chinese, Asian</p>
            <p className="font-normal text-sm text-[#7e808c]">
              Vidhyadhar Nagar, 10.8 km
            </p>
          </div>
          <div className="h-full p-2 flex flex-col border rounded-md justify-between items-center gap-2">
            <p className="text-sm font-extrabold text-green-600 grow border-b flex justify-center items-center gap-1 pb-2 w-full text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="1rem"
                className="fill-green-600"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              4.3
            </p>
            <p className="font-light text-xs grow">500+ ratings</p>
          </div>
        </div>
        <div className="w-full text-start text-xs font-normal flex items-center gap-2 text-[#7e808c]">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/equitable_serviceability/es-icons/es-location-icon.png" />
          Very Far (10.8 kms) | Additional delivery fee will apply
        </div>
      </div>
      <div className="w-full flex gap-5 justify-start items-center max-w-3xl">
        <div className="w-fit flex justify-center items-center gap-2">
          <svg
            class="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              stroke-width="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <p className="text-sm font-extrabold">45-50 MINS</p>
        </div>
        <div className="w-fit flex justify-center items-center gap-2">
          <svg
            class="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              stroke-width="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"
            ></path>
          </svg>
          <p className="text-sm font-extrabold">₹250 for two</p>
        </div>
      </div>
      {/* <p className="w-full text-center font-semibold underline text-2xl">
        MENU
      </p> */}
      <SwitchDemo />
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
