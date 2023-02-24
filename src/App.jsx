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
    let toEdit = [...tasks]
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
    <div className="container w-2/5 mx-auto">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      <button
        className="bg-red-600 text-white py-3 px-6 rounded-md font-bold"
        onClick={() => deleteAllTasks()}
      >
        Borrar todo
      </button>
    </div>
  );
}

export default App;
