import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

const ProductList = () => {

const [productList, setProductList] = useState([]);

useEffect(()=>{
axios.get("http://localhost:8000/api/product")
.then(res =>{
    console.log(res)
    setProductList(res.data.results);
})
.catch(err=>{
    console.log("error is", err)
})
},[])

    return (
        <div>
            <h1>All Products</h1>
            {
                productList.map((productObj)=>{
                    return(
                        <div key={productObj._id}>
                            <h4><Link to={`/productInfo/${productObj._id}`}>{productObj.title}</Link></h4>
                        </div>
                    )
            })
            }
        </div>
    )
        }


export default ProductList;