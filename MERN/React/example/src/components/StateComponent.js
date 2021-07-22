import React , { useState } from 'react';

const StateComponent = props => {
    const  [state,setState] = useState({
        clickCount: 0
    })
    const clickHandler =e => { 
        console.log(state)
        setState({
            clickCount : state.clickCount +1 
        })
    }
    return(
        <div>
            <button onClick= {clickHandler}> You Have Clicked this button {state.clickCount} times.</button>
        </div>
    )
}
export default StateComponent