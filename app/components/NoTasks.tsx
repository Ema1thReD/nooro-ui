"use client";
import React from "react";
import { PiNotepadLight } from "react-icons/pi";

const NoTasks: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-[#808080] text-center mt-8">
      <PiNotepadLight size={50} />
      <p className="font-bold">You don't have any tasks registered yet.</p>
      <p>Create tasks and organize your to-do items.</p>
    </div>
  );
};

export default NoTasks;
