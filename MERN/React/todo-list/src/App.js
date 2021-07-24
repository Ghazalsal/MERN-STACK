import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import DisplayTasks from './components/DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) =>{
    setTasks([...tasks, task]);
  }
  const changeCompleted= (e, index) =>{
    setTasks([...tasks.slice(0,index), {...tasks[index] ,completed: e.target.checked} , ...tasks.slice(index+1)])
  }
  const deleteTask = (e,index) =>{
    setTasks([...tasks.slice(0,index),  ...tasks.slice(index+1)])
  }

  return (
    <div className="App">
      <Form addTask={addTask} />
      <DisplayTasks tasks= {tasks} changeCompleted={changeCompleted} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
