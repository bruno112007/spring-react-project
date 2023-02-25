import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {
  const [products, setProducts] = useState([])
  const [btnCreate, setBtnCreate] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/find/1")
    .then(productsReturn => productsReturn.json())
    .then(products_json => setProducts(products_json));
  }, []);

  return (
    <div className="App">
      <p>{JSON.stringify(products)}</p>
      <Form botao={btnCreate}/>
      <Table vector ={products}/>
    </div>
  );
}

export default App;
