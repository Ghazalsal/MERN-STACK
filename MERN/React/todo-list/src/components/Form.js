import React, { useState } from 'react'

const Form =(props) => {
    const [text, setText] = useState("");
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        const task = {
            text,
            completed: false
        }
        props.addTask(task);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit} >
            <h1>Add Task</h1>
            <label>Text: </label>
            <input type="text" value = { text } onChange={(e) => setText(e.target.value)} />
            <input type="submit" value="Add a Task!" />
        </form>
    )
}

export default Form
