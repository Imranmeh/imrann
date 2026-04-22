import { useEffect, useState } from "react";
import Board from "./components/Board";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status } : task
    ));
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <input
        type="text"
        placeholder="Enter task"
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask(e.target.value);
        }}
      />
      <Board tasks={tasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
}