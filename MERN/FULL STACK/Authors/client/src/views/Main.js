import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import AuthorForm from '../components/AuthorForm';

const Main =(props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            });
    },[])
    const createAuthor=(name) => {
        console.log(name)
        axios.post('http://localhost:8000/api/author', 
            {name}
        )
        .then(res => {
            console.log("in the .then")
            setAuthor([...author,res.data])
        })
        .catch(err=>{
            console.log("in .catch")
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })  
    }

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
        console.log("I am in the remove")
    }
    // const create = author => {
    //     axios.post('http://localhost:8000/api/author', author)
    //         .then(res=>{
    //             setAuthor([...author, res.data]);
    //         })
    // }
    return (
        <div>
            <AuthorForm functionAuthor={createAuthor} initialName="" errors={errors}/>
            <hr/>
            {loaded && <AuthorList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;