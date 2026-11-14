function TaskComp({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="bottom-row">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-text">
            <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span>{task.text}</span>
            </label>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
              aria-label="Delete task"
            >
              −
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComp;
