import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [desc,setDesc] =useState('')
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            desc
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="desc" 
                    value={desc} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <Link to="/product">Back</Link>
        </div>
    )
}
export default Update;
