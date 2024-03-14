import React from "react";

import TitleAndIntro from "./components/TitleAndIntro";
import PortraitAndButtons from "./components/PortraitAndButtons";

export default function Home() {
  return (
      <div className='sm:flex sm:justify-between px-10 sm:px-20 py-[60px] sm:py-[120px] w-full h-full bg-cover bg-center'>
        <TitleAndIntro />
        <PortraitAndButtons />
      </div>
  );
}
