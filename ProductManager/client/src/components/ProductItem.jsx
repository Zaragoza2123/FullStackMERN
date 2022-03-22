import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductItem = () =>{

    let [productItem, setProductItem] = useState([]);

    const {_id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
        .then(res =>{
            console.log(res)
            setProductItem(res.data.results);
        })
        .catch(err=>{
            console.log("error is", err)
        })
    }, [])

    return(
        <div>
        <h1>Product Name: {productItem.title}</h1>
        <h3>Price: ${productItem.price}</h3>
        <p>Description: {productItem.description}</p>
        </div>
    )
}
export default ProductItem;