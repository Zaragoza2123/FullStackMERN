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



function App() {
  let [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager Project</h1>
        <Link to='/'>Home</Link>
        <Switch>
          <Route exact path='/'>
            <ProductForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductForm>
            <ProductList formSubmitted={formSubmitted}></ProductList>
          </Route>
          <Route exact path='/productInfo/:_id'>
            <ProductItem></ProductItem>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
