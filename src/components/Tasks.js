import Task from "./Task"
import PropTypes from 'prop-types'


const Tasks = ({tasks, OnDelete}) => {
  return (
    <>
      {tasks.map((task)=>(<Task key={task.id} task={task} OnDelete={OnDelete}/>))}
    </>
  )
}

Tasks.propTypes={
  OnDelete:PropTypes.func,
}

export default Tasks
