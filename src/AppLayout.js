import React from "react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Restaurant from "./pages/Restaurant";
// import Accordion from "./components/Accordion";
import AccordionDemo2 from "./components/Accordion";
import * as Accordion from "@radix-ui/react-accordion";

import React from "react";
import classNames from "classnames";
import AccordionDemo2 from "./components/Accordion";
import Restaurant from "./pages/Restaurant";

const AppLayout = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Restaurant />
    </div>
  );
};

export default AppLayout;
