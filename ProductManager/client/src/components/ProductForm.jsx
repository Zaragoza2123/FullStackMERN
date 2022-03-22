import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(null);
    let [description, setDescription] = useState("");

    const createProduct = (e) =>{
        e.preventDefault();
        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/product", formInfo)
        .then(res=>{
            console.log('response:', res)
            props.setFormSubmitted(!props.formSubmitted)
        })
        .catch(err=>{
            console.log('error is ->', err)
        })
        
    }


    return (
        <div>
            <form onSubmit={createProduct}>
                <div>
                    <label>Title:</label>
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} ></input>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}}></input>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}}></input>
                </div>
                <div>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}
export default ProductForm;