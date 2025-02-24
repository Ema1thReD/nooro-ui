"use client";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { colors } from "../config/constants";

const TaskInput = ({ formik }: any) => {
  return (
    <div className="flex flex-col space-y-4">
      <label className="text-left">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Ex. Brush you teeth"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="p-2 rounded-[6px] w-[100%] border border-black/30 h-12 color-white bg-[#2c2b2b] focus:outline-none focus:border-[#363737]"
      />
      <p className="text-[red] ">
        {(formik.submitCount > 0 && formik.errors.title) || " "}
      </p>
      <label>Color</label>
      <div className="flex gap-2">
        {colors.map((colorCode: string, index: number) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-full cursor-pointer border-2 ${
              formik.values.color === colorCode
                ? "border-white"
                : "border-transparent"
            }`}
            style={{ backgroundColor: colorCode }}
            onClick={(e) => formik.setFieldValue("color", colorCode)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default TaskInput;
