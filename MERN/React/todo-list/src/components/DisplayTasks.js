import React from 'react'

const DisplayTasks = (props) => {
    const {tasks,changeCompleted,deleteTask} = props;
    return (
        <div>
            {
                tasks.map(
                    (task,index) => {
                        return(
                            <p style={task.completed? {color:"blue", textDecoration:"line-through" }:{}} key={index}>
                                {task.text}
                                <input type="checkbox" checked={task.completed} onChange={(e) => changeCompleted(e,index)} />
                                <button onClick={(e) => deleteTask(e,index)}>Delete</button>
                            </p>
                        )
                    }
                )
            }
        </div>
    )
}

export default DisplayTasks;
