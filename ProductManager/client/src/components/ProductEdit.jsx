import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ProductEdit = (props) =>{

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    let [productItem, setProductItem] = useState({});

    let[formErrors,setFormErrors] = useState({})

    const {_id} = useParams();

    const history = useHistory();

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

    const editProduct = (e) =>{
    e.preventDefault();
    // let formInfo = {title, price, description};

    axios.put(`http://localhost:8000/api/product/${_id}`, productItem)
    .then(res=>{
        console.log('response:', res)
        history.push('/')
        // if(res.data.error) {
        //     setFormErrors(res.data.error.errors);
        // }else{
        //     props.setFormSubmitted(!props.formSubmitted)
        //     
        // }
    })
    .catch(err=>{
        console.log('error is ->', err)
    })
    
}
const changeHandler = (e)=>{
    setProductItem({
        ...productItem, //spread operator to make a copy of the rest
        [e.target.name]: e.target.value
    })
}


    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={editProduct}>
                <div>
                    <label>Title:</label> 
                    <input type="text"name='title' onChange={changeHandler} value={productItem.title} ></input>
                    <p style={{color: 'red'}}>{formErrors.title?.message}</p>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name='price' onChange={changeHandler} value={productItem.price}></input>
                    <p style={{color: 'red'}}>{formErrors.price?.message}</p>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" onChange={changeHandler} value={productItem.description}></textarea>
                    <p style={{color: 'red'}}>{formErrors.description?.message}</p>
                </div>
                <div>
                    <button type='submit'>Update Product</button>
                </div>
            </form>
        </div>
    )
    }


export default ProductEdit;