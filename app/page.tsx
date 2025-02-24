"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import AddTask from "./pages/tasks/page";
import Header from "./components/Header";

const App = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  // Fetch tasks on component mount
  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) =>
        console.error("There was an error fetching tasks!", error)
      );
  };
  const deleteTask = (taskId: string) => {
    axios
      .delete(`http://localhost:5000/tasks/${taskId}`)
      .then((response) => {
        getTasks();
      })
      .catch((error) => console.error("Error adding task", error));
  };
  return (
    <div className="min-h-screen px-8">
      <Header />
      <div className="px-4 mt-[-20px] sm:px-10 md:px-20 lg:px-50 xl:px-80">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
