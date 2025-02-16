import React from "react";
import Platforms from "../components/main/Platforms";
import Technologies from "../components/main/Technologies";
import NativeLanguages from "../components/main/NativeLanguages";
import XXWorkFlow from "../components/main/10XWorkFlow";
import Certifications from "../components/main/Certifications";
import Educations from "../components/main/Educations";
import About from "../components/main/About";
import Profile from "../components/main/Profile";
import Heading from "../components/main/Heading";

const Main = () => {
  return (
    <main className="flex flex-col items-center text-start  pt-20 ">
     <Heading/>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] h-auto rounded-lg border border-white/10 mt-8 mb-8">
      <Profile/>
        <div className="w-full h-[80%] flex flex-col  md:flex-row ">
          <div className="w-full md:w-[50%]  flex flex-col items-center gap-6 p-4">
            <About/>
            <Educations/>
            <Certifications/>
            <Platforms/>
          </div>

          <div className="w-full flex flex-col items-center md:w-[50%]  md:border-l border-white/10  gap-6 p-4">
              <Technologies/>
              <NativeLanguages/>
              <XXWorkFlow/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
