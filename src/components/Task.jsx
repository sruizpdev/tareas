const Task = ({ task, deleteTask, editTask }) => {
  const { id, name } = task;
  return (
    <div className="flex space-x-8">
      <div className="flex items-center bg-slate-50 mb-1 md:w-3/4 pl-3 border-l-8 border-l-emerald-500 ">
        <p className="text-lg font-bold">{name}</p>
      </div>
      <div className="md:w-1/4 mb-1 divide-x-4">
        <button
          type="submit"
          className="bg-red-700 hover:bg-red-600 w-2/4 text-white px-2 py-3"
          onClick={() => deleteTask(id)}
        >
          Eliminar
        </button>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-600 w-2/4 text-white px-2 py-3"
          onClick={() => editTask(id)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default Task;
