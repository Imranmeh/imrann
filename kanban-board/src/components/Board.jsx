import Column from "./Column";

export default function Board({ tasks, updateTaskStatus }) {
  return (
    <div style={{ display: "flex", gap: "360px" }}>
      <Column title="To Do"  status="todo" tasks={tasks} updateTaskStatus={updateTaskStatus} />
      <Column title="In Progress" status="inprogress" tasks={tasks} updateTaskStatus={updateTaskStatus} />
      <Column title="Done" status="done" tasks={tasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
}