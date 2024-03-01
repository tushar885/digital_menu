import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import ScrollAreaDemo from "./ScrollAreaDemo";
import { useState } from "react";

const DialogDemo = ({ activeAccordion, setActiveAccordion }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Dialog.Root
      className="z-[2000]"
      open={dialogOpen}
      onOpenChange={(p) => {
        setDialogOpen(p);
      }}
    >
      <Dialog.Trigger asChild>
        <button className="text-white text-sm tracking-wider shadow-blackA4 hover:text-mauve5 shadow-2xl inline-flex h-[35px] items-center justify-center rounded-full px-5 py-2 bg-[#5d8ed5]  font-medium leading-none  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="1rem"
            className="fill-white mr-2"
          >
            <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
          </svg>
          BROWSE MENU
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-900 opacity-30 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-[#282c3f] font-semibold mb-4 text-base font-Poppins">
            Categories
          </Dialog.Title>
          {/* <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
       Make changes to your profile here. Click save when you're done.
     </Dialog.Description> */}
          {/* <fieldset className="mb-[15px] flex items-center gap-5">
       <label
         className="text-violet11 w-[90px] text-right text-[15px]"
         htmlFor="name"
       >
         Name
       </label>
       <input
         className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
         id="name"
         defaultValue="Pedro Duarte"
       />
     </fieldset>
     <fieldset className="mb-[15px] flex items-center gap-5">
       <label
         className="text-violet11 w-[90px] text-right text-[15px]"
         htmlFor="username"
       >
         Username
       </label>
       <input
         className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
         id="username"
         defaultValue="@peduarte"
       />
     </fieldset> */}
          <ScrollAreaDemo
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
          />
          {/* <div className="mt-[25px] flex justify-end">
       <Dialog.Close asChild>
         <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
           Save changes
         </button>
       </Dialog.Close>
     </div> */}
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
