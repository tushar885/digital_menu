import React from "react";
import "@radix-ui/themes/styles.css";
import Restaurant from "./pages/Restaurant";

const AppLayout = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Restaurant />
    </div>
  );
};

export default AppLayout;
