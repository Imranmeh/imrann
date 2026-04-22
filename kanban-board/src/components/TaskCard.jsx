export default function TaskCard({ task }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        background: "white",
        padding: "10px",
        margin: "10px 0",
        cursor: "grab",
        borderRadius: "10px"
      }}
    >
      {task.title}
    </div>
  );
}