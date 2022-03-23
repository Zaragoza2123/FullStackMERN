import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductItem from './components/ProductItem';
import ProductEdit from './components/ProductEdit';



function App() {
  //make a var that will be sent to the form comp, itll toggle it every submit
  let [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager Project</h1>
        <Link to='/'>Home</Link>
        <Switch>
          <Route exact path='/'>
            <ProductForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductForm>
            <ProductList formSubmitted={formSubmitted}  setFormSubmitted={setFormSubmitted}></ProductList>
          </Route>
          <Route exact path='/productInfo/:_id'>
            <ProductItem></ProductItem>
          </Route>
          <Route exact path='/productEdit/:_id'>
            <ProductEdit formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductEdit>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
