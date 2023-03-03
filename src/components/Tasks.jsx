import Task from "./Task";

const Tasks = ({ tasks, deleteTask, setTask }) => {
  
  return (
    <div className="grid grid-cols-1 mt-5">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setTask={setTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
