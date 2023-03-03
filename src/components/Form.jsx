import { useState, useEffect } from "react";

const Form = ({ tasks, setTasks, task, setTask }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(task).length > 0) {
      setTaskName(task.taskName);
    }
  }, [task]);

  const generateId = () => {
    const random = Math.random().toString().substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === "") {
      console.log("La tarea no debe estar vacia");
      return;
    }

    const taskObject = {
      taskName,
    };

    if (task.id) {
      taskObject.id = task.id;
      const tasksUpdated = tasks.map((taskState) =>
        taskState.id === task.id ? taskObject : taskState
      );

      setTasks(tasksUpdated);
      setTask({});
    } else {
      taskObject.id = generateId();
      setError(true);

      setTasks([...tasks, taskObject]);
    }
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-2">
      <input
        type="text"
        placeholder="Introduce aquí la tarea"
        className="md:col-span-4 col-span-5 py-2 rounded-md placeholder:text-gray-200 border pl-2 focus:outline-green-200"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button
        type="submit"
        className="md:col-span-1 col-span-5 py-2 bg-green-500 hover:bg-green-600 text-white px-3 rounded-md"
      >
        {task.id ? "Editar" : "Añadir"}
      </button>
    </form>
  );
};

export default Form;
