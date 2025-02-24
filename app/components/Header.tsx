"use client";
import React, { useState } from "react";
import { IoMdRocket } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl flex items-center gap-2 mb-6 py-14">
        <IoMdRocket color="#3D81A9" />
        <span className="text-[#4EA8DE] font-bold">Todo</span>
        <span className="text-[#5E60CE] font-bold">App</span>
      </h1>
    </div>
  );
};

export default Header;
