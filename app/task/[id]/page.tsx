"use client";
import Header from "@/app/components/Header";
import TaskInput from "@/app/components/TaskInput";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import ITask from "@/app/types/Task";
import axios from "axios";
import * as yup from "yup";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  color: yup.string().required("Color is required"),
});

const initialTask: ITask = {
  id: "",
  title: "",
  color: "",
  createdAt: "",
  updatedAt: "",
  completed: false,
};

export default function UpdateTask() {
  const params = useParams();
  const route = useRouter();
  const formik = useFormik({
    initialValues: initialTask,
    validationSchema,
    onSubmit: (values: ITask) => {
      updateTask(values);
    },
  });
  useEffect(() => {
    getTask();
  }, []);
  const getTask = () => {
    if (!params?.id) return;
    axios
      .get(`http://localhost:5000/tasks/${params?.id}`)
      .then((response) => {
        formik.setValues(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching tasks!", error)
      );
  };
  const updateTask = (task: ITask) => {
    axios
      .put("http://localhost:5000/tasks/"+task.id, task)
      .then((response) => {
        // navigate
        console.log(response,'res')
        route.push("/");
      })
      .catch((error) => console.error("Error updating task", error));
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
            save &ensp;
            <FaCheck />
          </button>
        </form>
      </div>
    </div>
  );
}
