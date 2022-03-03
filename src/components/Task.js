import { FaTimes } from 'react-icons/fa'
const Task = ({ task, deleteTask }) => {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{cursor: 'pointer'}} onClick={() => deleteTask(task.id)} /></h3>
        </div>
    )
}

export default Task