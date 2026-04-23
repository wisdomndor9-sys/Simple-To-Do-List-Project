
// function TaskComp() {
function TaskComp({ tasks, toggleComplete }) {
  
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
          </li>
        ))}
      </ul>
    </div>
  );
}
  
  // const task = [
  //   { id: 1, text: "NOTE#1" },
  //   { id: 2, text: "NOTE#2" },
  //   { id: 3, text: "NOTE#3" }
  //   ];

//   return (
//     <div className="bottom-row">

//       <ul>
//         {task.map((task) => (
//           <li key={task.id} className="task-text">
//             <label>
//               <input type="checkbox" />
//               <span>{task.text}</span>
//             </label>
//           </li>
//         ))}
//       </ul>
      
      
//     </div>
//   );
// }
 export default TaskComp;

    
