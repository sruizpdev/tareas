import Edit from "../assets/Edit";
import { useState } from "react";

const Task = ({ task, setTask, deleteTask }) => {
  const { id, taskName } = task;
  const [selected, setSelected] = useState(false);

  const handleCheckbox = () => {
    setSelected(true);
    setTimeout(() => {
      deleteTask(id);
      setSelected(false);
    }, 1000);
  };

  return (
    <div
      className={
        selected
          ? "transition-colors duration-1000 flex justify-between border rounded-md bg-white px-3 py-5 mb-2 "
          : "flex justify-between border border-sky-500 rounded-md bg-white px-3 py-5 mb-2"
      }
    >
      <div className="flex justify-start items-center">
        <input
          type="checkbox"
          id="task"
          className="mr-3 rounded-full"
          onChange={() => handleCheckbox()}
        />
        <div
          className={
            selected
              ? "transition-colors duration-1000 line-through text-zinc-200"
              : "text-zinc-700"
          }
        >
          {taskName}
        </div>
      </div>
      <button
        type="submit"
        className=" hover:text-green-500"
        onClick={() => setTask(task)}
      >
        <Edit />
      </button>
    </div>
  );
};

export default Task;
