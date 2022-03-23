import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Link, useHistory } from 'react-router-dom';


const ProductList = (props) => {

    const [productList, setProductList] = useState([]);

    const history = useHistory();

useEffect(()=>{
axios.get("http://localhost:8000/api/product")
.then(res =>{
    console.log(res)
    setProductList(res.data.results);
})
.catch(err=>{
    console.log("error is", err)
})
},[props.formSubmitted])

const deleteHandler = (productObj_id) => {
    axios.delete(`http://localhost:8000/api/product/` + productObj_id)
    .then(res =>{
        console.log(res)
        props.setFormSubmitted(!props.formSubmitted)
    })
    .catch(err=>{
        console.log("error is", err)
    });
}

    return (
        <div>
            <h1>All Products</h1>
            {
                productList.map((productObj)=>{
                    return(
                        <div key={productObj._id}>
                            <h4>{productObj.title}</h4>
                            <h4><Link to={`/productInfo/${productObj._id}`}>Details</Link>|
                            <Link to={`/productEdit/${productObj._id}`}>Edit {productObj.title}</Link>|
                            <button onClick={(e)=>{deleteHandler(productObj._id)}} >Delete</button></h4>
                            <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                        </div>
                    )
            })
            }
        </div>
    )
        }


export default ProductList;