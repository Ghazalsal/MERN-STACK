import React from 'react'


const Results = props => {
    const { firstName, lastName, email, password, confPassword } = props.data;
    return(
        <div>
        <h2>Results</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confPassword}</p>
        </div>
    )
}

export default Results;
