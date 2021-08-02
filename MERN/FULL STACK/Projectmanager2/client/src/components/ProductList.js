import { Link } from '@reach/router'
import React from 'react'
const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, idx)=>{
            
            return <p key={idx}> <Link to={"/product/" + product._id}>product</Link> {product.title}, {product.price}, {product.desc}</p>
            })}
            
        </div>
    )
}
export default ProductList;
