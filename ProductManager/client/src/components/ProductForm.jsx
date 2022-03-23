import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    let[formErrors,setFormErrors] = useState({})

    const createProduct = (e) =>{
        e.preventDefault();
        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/product", formInfo)
        .then(res=>{
            console.log('response:', res)
        
            if(res.data.error) {
                setFormErrors(res.data.error.errors);
            }else{
                props.setFormSubmitted(!props.formSubmitted)
                //clear the state vars after form is submitted
            setTitle("");
            setPrice("");
            setDescription("");
            }
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
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} ></input>
                    <p style={{color: 'red'}}>{formErrors.title?.message}</p>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price}></input>
                    <p style={{color: 'red'}}>{formErrors.price?.message}</p>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}></input>
                    <p style={{color: 'red'}}>{formErrors.description?.message}</p>
                </div>
                <div>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}
export default ProductForm;