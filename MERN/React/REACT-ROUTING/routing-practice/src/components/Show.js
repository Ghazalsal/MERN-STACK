import React from 'react'

const Show = (props) => {
    const { variable, color, backgroundColor} = props;
    return (
        <h1 style={{color:color,backgroundColor:backgroundColor}}>
            {isNaN(variable) ? 
                variable === "Welcome" ? variable : `the word is : ${variable}` 
                : `the number is: ${variable}`}
        </h1>
    )
}

export default Show
