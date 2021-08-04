import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
const Update =( props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])
    const updateAuthor = name => {
        axios.put('http://localhost:8000/api/author/' + id,{name}) 
            .then(res => navigate("/"))
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
    return (
        <div>
        <h1>Update a Person</h1>
        {loaded && (
            <>
                <AuthorForm
                    functionAuthor={updateAuthor}
                    errors={errors}
                    initialName={author.name}
                />
                <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
            </>
        )}
        </div>
    )
}
export default Update;