import { useState } from "react";

const Form = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const generateId = () => {
      const random = Math.random().toString().substring(2);
      const fecha = Date.now().toString(36);
      return random + fecha;
    };

    const taskObject = {
      name: task,
    };
    if (task !== "") {
      taskObject.id = generateId();
      setTasks([...tasks, taskObject]);
      setError(false);
    } else {
      setError(true);

      return;
    }
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-2">
      <input
        type="text"
        placeholder="Introduce aquí la tarea"
        className="md:col-span-4 col-span-5 py-2 rounded-md placeholder:text-gray-200 border pl-2 focus:outline-green-200"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        type="submit"
        className="md:col-span-1 col-span-5 py-2 bg-green-500 hover:bg-green-600 text-white px-3 rounded-md"
      >
        Añadir
      </button>
    </form>
  );
};

export default Form;
