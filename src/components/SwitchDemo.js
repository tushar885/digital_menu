import React from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchDemo = () => (
  <form className="w-full flex max-w-3xl justify-start items-center mt-8">
    <div className="flex items-center">
      <label
        className="text-[#02060CEB] text-xs font-extrabold leading-none pr-[15px] font-Raleway"
        htmlFor="airplane-mode"
      >
        VEG ONLY
      </label>
      <Switch.Root
        className="w-[42px] h-[22px]  bg-[#d4d5d9] rounded-full relative shadow-2xl   data-[state=checked]:bg-green-600 outline-none cursor-default"
        id="airplane-mode"
        style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
      >
        <Switch.Thumb className="block h-[16px] w-[16px]  aspect-square bg-white rounded-full  shadow-lg transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
