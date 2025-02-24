"use client";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import NoTasks from "./NoTasks";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
const TaskList = ({
  tasks,
  deleteTask,
}: {
  tasks: { id: string; title: string; color: string; completed: boolean }[];
  deleteTask: any;
}) => {
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div>
      <Link
        href="/task"
        className="flex mt-[-20px] w-full items-center justify-center bg-blue-500 text-white p-2 rounded"
      >
        Create Task &ensp;
        <AiOutlinePlusCircle />
      </Link>
      <div className="mt-6">
        <div className="flex justify-between">
          <div>
            <span className="text-[#4EA8DE]">Tasks</span> &nbsp;
            <span className="bg-[#57595b] rounded-[6px] px-1">
              {tasks?.length}
            </span>
          </div>
          <div>
            <span className="text-[#4EA8DE]">Completed</span> &nbsp;
            <span className="bg-[#414243] rounded-[6px] px-2">
              {completedTasks?.length} de {tasks?.length}
            </span>
          </div>
        </div>
        {tasks?.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex mt-4 justify-between bg-[#262626] items-start p-4 border border-[#3b3c40] rounded shadow-sm"
            >
              <div className="flex items-start">
                <div className="px-2">
                  <label className="relative flex items-center">
                    {task.completed ? (
                      <FaCircleCheck className="text-blue-500 w-5 h-5" />
                    ) : (
                      <input
                        type="radio"
                        checked={task.completed}
                        className="w-5 h-5 border-2 border-blue-500 rounded-full appearance-none checked:bg-blue-500 checked:border-transparent flex items-center justify-center"
                        onChange={() => {}}
                      />
                    )}
                  </label>
                </div>

                <Link href={task.completed ? "" : "/task/" + task.id}>
                  <span
                    className={`px-4 ${
                      task.completed ? "line-through cursor-not-allowed" : ""
                    } w-full block`}
                  >
                    {task.title}
                  </span>
                </Link>
              </div>
              <div className="px-2">
                <RiDeleteBin5Line className="cursor-pointer" onClick={() => deleteTask(task.id)} />
              </div>
            </div>
          ))
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  );
};

export default TaskList;
