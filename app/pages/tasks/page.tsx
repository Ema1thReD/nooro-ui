"use client";
import Header from "@/app/components/Header";
import TaskInput from "@/app/components/TaskInput";
import React from "react";
import { useFormik } from "formik";
import ITask from "@/app/types/Task";
import axios from "axios";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  color: yup.string().required("Color is required"),
});

const initialTask: ITask = {
  title: "",
  color: "",
};

export default function AddTask() {
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
        alert("success");
      })
      .catch((error) => console.error("Error adding task", error));
  };
  return (
    <div>
      <Header />
      <div className="px-4 sm:px-10 md:px-20 lg:px-50 xl:px-80">
        <TaskInput formik={formik} />
      </div>
    </div>
  );
}
