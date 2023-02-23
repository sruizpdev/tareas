import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  let tasksLS = JSON.parse(localStorage.getItem("tasks"));
  if (!tasksLS) {
    tasksLS = [];
  }

  useEffect(() => {
    if (tasksLS) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [tasks, tasksLS]);

  return (
    <div className="container w-2/5 mx-auto">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
