import Form from "./components/Form";
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
        if (taskUpdated) {
          task.name = taskUpdated;
          task.id = id;
        } else {
          alert("La tarea no puede estar vacía");
          return;
        }
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
    <div className="p-5">
      <Form tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

      {tasks.length !== 0 ? (
        <button
          className="mt-10 text-sm text-gray-300 hover:text-red-500"
          onClick={() => deleteAllTasks()}
        >
          Eliminar todo
        </button>
      ) : (
        "no hay tareas"
      )}
    </div>
  );
}

export default App;
