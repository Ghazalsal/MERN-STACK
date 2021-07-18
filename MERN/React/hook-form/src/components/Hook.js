import React, { useState } from  'react';
    
    
const UserForm = props => {
    const {inputs, setInputs} = props;


    const createUser = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ createUser } name= "firstName" />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={createUser } name= "lastName" />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ createUser} name= "email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ createUser } name= "password"/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ createUser } name= "confPassword" />
            </div>
        </form>
        </div>
    );
};
    
export default UserForm;