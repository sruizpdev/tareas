import { useState } from "react";
import NewTask from "../assets/NewTask";

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce aquí la tarea"
          className="placeholder:text-gray-200 border-b mr-3 mb-5 pl-2 hover:border-green-500 focus:outline-0"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit" className="font-bold hover:text-green-500">
          <NewTask />
        </button>
      </form>
    </>
  );
};

export default Form;
