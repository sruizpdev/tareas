import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);


  
  return (
    <div className="container w-2/5 mx-auto">
      <Header />
      <Form tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
