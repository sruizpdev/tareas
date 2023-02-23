import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="py-3">
      {tasks.map((task) => (
        <Task 
        key={task.id}
        task={task} />
      ))}

      <input
        type="submit"
        value="Borrar todas"
        className="bg-red-600 text-white py-3 px-6 rounded-md font-bold"
      />
    </div>
  );
};

export default Tasks;
