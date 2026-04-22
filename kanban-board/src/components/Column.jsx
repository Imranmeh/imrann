import TaskCard from "./TaskCard";

export default function Column({ title, status, tasks, updateTaskStatus }) {
  const filteredTasks = tasks.filter(task => task.status === status);

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("taskId");
    updateTaskStatus(id, status);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        background: "#abc6e6",
        padding: "10px",
        width: "250px",
        minHeight: "400px"
      }}
    >
      <h3>{title}</h3>
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}