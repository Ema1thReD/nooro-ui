"use client";
import Header from "@/app/components/Header";
import TaskInput from "@/app/components/TaskInput";
import React from "react";
import { useFormik } from "formik";
import ITask from "@/app/types/Task";
import axios from "axios";
import * as yup from "yup";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { colors } from "../config/constants";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  color: yup.string().required("Color is required"),
});

const initialTask: ITask = {
  title: "",
  color: colors[0],
};

export default function AddTask() {
  const route = useRouter();
  const formik = useFormik({
    initialValues: initialTask,
    validationSchema,
    onSubmit: (values: ITask) => {
      createTask(values);
    },
  });
  const createTask = (task: { title: string; color: string }) => {
    axios
      .post("http://localhost:5000/tasks", task)
      .then((response) => {
        // navigate
        route.push("/");
      })
      .catch((error) => console.error("Error adding task", error));
  };
  return (
    <div>
      <Header />
      <div className="px-4 sm:px-10 md:px-20 lg:px-50 xl:px-80">
        <div className="py-8">
          <Link href="/">
            <MdOutlineKeyboardBackspace className="cursor-pointer text-2xl" />
          </Link>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <TaskInput formik={formik} />
          <button
            type="submit"
            className="flex mt-6 items-center justify-center bg-blue-500 text-white p-2 rounded"
          >
            Add Task &ensp;
            <AiOutlinePlusCircle />
          </button>
        </form>
      </div>
    </div>
  );
}
