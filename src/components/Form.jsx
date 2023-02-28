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

      //TODO: hay que mostrar mensaje de error cuando el input esté vacío

      return;
    }
    setTask("");
  };

  return (
    <>
      <form className="flex space-x-8" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce aquí la tarea"
          className="pl-3 border-2 py-3 w-3/4"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-600 w-1/4 text-white px-3 py-3"
        >
          Añadir tarea
        </button>
      </form>
    </>
  );
};

export default Form;
