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
  // const editTask = (id) => {
  //   let toEdit = [...tasks];
  //   toEdit.map((task) => {
  //     if (task.id === id) {
  //       const taskUpdated = prompt(
  //         `Actualizando la tarea: ${task.name}`,
  //         task.name
  //       );
  //       if (taskUpdated) {
  //         task.name = taskUpdated;
  //         task.id = id;
  //       } else {
  //         alert("La tarea no puede estar vacía");
  //         return;
  //       }
  //     }
  //   });
  //   setTasks(toEdit);
  // };
  const deleteAllTasks = () => {
    if (confirm("Estas seguro?")) {
      setTasks([]);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto md:w-3/5 bg-white rounded-md border border-zinc-200 mt-5 p-5">
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
          "No hay tareas"
        )}
      </div>
    </>
  );
}

export default App;
