import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks,settasks]=useState(
    [
      {
          id:1,
          text:"Doctors Appointment",
          day:"Feb 5th at 2:30pm",
          reminder:true,
      },
      {
          id:2,
          text:"Meeting at school",
          day:"Feb 6th at 1:30pm",
          reminder:true,
      },
      {
          id:3,
          text:"Food Shopping",
          day:"Feb 5th at 3:30pm",
          reminder:false,
      }
  ]
  )

  //delete a task
  const deleteTask=(id)=>{
    settasks(tasks.filter((task)=>task.id!==id))
  }

  return (
    <div className="Container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>

    </div>
  );
}

export default App;
