import React from "react";
import CardProject from "../Components/CardProject";
import Navbar from "../Components/Navbar";

const projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-20 pt-10">
      <Navbar />
      <CardProject />
    </div>
  );
};

export default projects;
