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
      name: task
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
      <form className="flex space-x-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce aquí la tarea"
          className="border-2 p-3 rounded-md text-lg w-3/4"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="submit"
          value="Añadir tarea"
          className="bg-sky-600 text-white py-3 px-6 rounded-md font-bold"
        />
        
      </form>
    </>
  );
};

export default Form;
