const Task = ({ task, erase }) => {
  return (
    <li>{task}<button onClick={erase}>x</button> </li>
  )
}
export default Task
