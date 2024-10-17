import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBar() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "React is used to build single-page applications. React allows us to create reusable UI components.",
    tags: ["Web", "React", "JS"],
    priority: "High",
    isFavourite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
