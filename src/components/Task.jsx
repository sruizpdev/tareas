import Edit from "../assets/Edit";

const Task = ({ task, deleteTask, editTask }) => {
  const { id, name } = task;
  const handleCheckbox = async() => {
    setTimeout(() => {
      console.log("cambiando checked");
    }, 2000);
    await deleteTask(id);
  };

  return (
    <div className="flex">
      <input
        type="checkbox"
        className="mr-3 checked:bg-blue-500 rounded-full"
        onChange={() => handleCheckbox()}
      />
      {name}

      <button
        type="submit"
        className="ml-3 hover:text-sky-500"
        onClick={() => editTask(id)}
      >
        <Edit />
      </button>
    </div>
  );
};

export default Task;
