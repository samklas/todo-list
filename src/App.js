import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';
import './App.css';



const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000)
    const newTask = {
      id,
      ...task
    }
    setTasks([...tasks, newTask])
  }

  // Alla ole koodin pätkä palauttaa meille kaikki ne taskit, joiden id (tasks.id) ei vastaa poistettavan taskin (id) id:tä
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }



  return (
    <div className='container'>
      <Header title={'Task Tracker'}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask}/> : 'No tasks'}
      <AddTask addTask={addTask}/>
    </div>
  )
}

export default App;
