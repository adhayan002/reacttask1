import {FaTimes} from "react-icons/fa"
import {PropTypes} from 'prop-types'


const Task = ({task,OnDel}) => {
    console.log(OnDel)
  return (
    <div className="task">
      <h3>{task.text} <FaTimes style={{color:"red",cursor:"pointer"}} onClick={()=>{OnDel(task.id)}}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes={
    OnDel:PropTypes.func,
}



export default Task
