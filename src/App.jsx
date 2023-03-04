import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  let tasksLS = JSON.parse(localStorage.getItem("tasks"));
  if (!tasksLS) {
    tasksLS = [];
  }
  const [tasks, setTasks] = useState(tasksLS);
  const [task, setTask] = useState({});

  useEffect(() => {
    if (tasksLS) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [tasks, tasksLS]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks([...updatedTasks]);
  };

  const deleteAllTasks = () => {
    if (confirm("Estas seguro?")) {
      setTasks([]);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto md:w-3/5 bg-white rounded-md border border-sky-200 mt-5 p-5">
        <Form tasks={tasks} setTasks={setTasks} task={task} setTask={setTask} />

        <Tasks tasks={tasks} deleteTask={deleteTask} setTask={setTask} />

        {tasks.length !== 0 ? (
          <button
            className="mt-10 text-sm text-zinc-200 hover:text-red-500"
            onClick={() => deleteAllTasks()}
          >
            Eliminar todo
          </button>
        ) : (
          <div className="text-center">
            
            
            <p>No hay tareas pendientes. </p>
            <p>Enhorabuena !!!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
