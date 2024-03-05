import React from "react";
import Contact from "../Components/Contac";
import Navbar from "../Components/Navbar";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center lg:p-20 pt-10 p-5">
      <Navbar />
      <Contact />
    </div>
  );
};

export default page;
