const Task = ({ task, deleteTask, editTask }) => {
  const { id, name } = task;
  return (
    <div className="flex">
      {`- ${name}`}
      <button className="mx-3" type="submit" onClick={() => deleteTask(id)}>
        x
      </button>
      <button type="submit" onClick={() => editTask(id)}>
        e
      </button>
    </div>
  );
};

export default Task;
