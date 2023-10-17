import { useState } from 'react'
import Task from './Task'
import './styles/list.css'

const List = () => {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const handleAdd = () => {
    if (task.trim()) {
      setList([...list, task])
      setTask('')
    }
  }
  const handleErase = (index) => {
    setList(list.filter((el, i) => i !== index))
  }
  return (
    <div>
      <ul className='ul'>
        {
            list.map((el, i) => {
              return (
                <Task key={i} task={el} erase={() => handleErase(i)} />
              )
            })
        }
      </ul>
      <input
        type='text'
        value={task}
        placeholder='Task'
        onChange={(e) => { setTask(e.target.value) }}
      />
      <button
        onClick={handleAdd}
      >
        Add item
      </button>
    </div>
  )
}
export default List
