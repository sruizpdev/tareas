import Task from "./Task";

const Tasks = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="grid grid-cols-1 mt-5">
      
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
