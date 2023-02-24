const Task = ({ task, deleteTask , editTask}) => {
  const { id, name } = task;
  return (
    <div className="flex">
      <p className="w-2/3">{name}</p>

      <button
        type="submit"
        className="bg-red-600 text-white py-3 px-6 rounded-md font-bold"
        onClick={() => deleteTask(id)}
      >
        Eliminar tarea
      </button>
      <button
        className="bg-green-600 text-white py-3 px-6 rounded-md font-bold"
        onClick={() => editTask(id)}
      >
        Editar
      </button>
    </div>
  );
};

export default Task;
