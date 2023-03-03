import Edit from "../assets/Edit";
import { useState } from "react";

const Task = ({ task, setTask, deleteTask }) => {
  const { id, taskName } = task;
  const [selected, setSelected] = useState(false);

  const handleCheckbox = () => {
    setSelected(true);
    setTimeout(() => {
      deleteTask(id);
      setSelected(false)
    }, 1500);
  };

  return (
    <div className="flex justify-between border border-green-500 rounded-md bg-white px-3 py-5 mb-2">
      <div className="flex justify-start">
        <input
          type="checkbox"
          id="task"
          className=" checked:bg-green-500 mr-3"
          onChange={() => handleCheckbox()}
        />
        <div className={selected ? "transition-colors duration-1000 line-through text-zinc-200" : "text-zinc-700"}>{taskName}</div>
      </div>
      <button
        type="submit"
        className=" hover:text-sky-500"
        onClick={() => setTask(task)}
      >
        <Edit />
      </button>
    </div>
  );
};

export default Task;
