import Task from "./Task"

const Tasks = ({ tasks, deleteTask }) => {
   
    return (
        <div className="tasks">
            {tasks.map((task) => (<Task key={task.id} task={task} deleteTask={deleteTask}/>))}
        </div>
    )
}

export default Tasks