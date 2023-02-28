import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  let tasksLS = JSON.parse(localStorage.getItem("tasks"));
  if (!tasksLS) {
    tasksLS = [];
  }
  const [tasks, setTasks] = useState(tasksLS);
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
  const editTask = (id) => {
    let toEdit = [...tasks];
    toEdit.map((task) => {
      if (task.id === id) {
        const taskUpdated = prompt(
          `Actualizando la tarea: ${task.name}`,
          task.name
        );
        task.name = taskUpdated;
        task.id = id;
      }
    });
    setTasks(toEdit);
  };
  const deleteAllTasks = () => {
    if (confirm("Estas seguro?")) {
      setTasks([]);
    }
  };

  return (
    <div className="container md:w-full lg:w-3/5 mx-auto bg-white">
      <div className="mb-9 mt-9">
        <Header />
      </div>

      <div className="container mx-auto p-7">
        <div className="w-full mb-7">
          <Form tasks={tasks} setTasks={setTasks} />
        </div>

        <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

        <button
          className="mt-12 bg-orange-300 hover:bg-red-500 text-white px-3 m"
          onClick={() => deleteAllTasks()}
        >
          Eliminar todo
        </button>
      </div>
    </div>
  );
}

export default App;
