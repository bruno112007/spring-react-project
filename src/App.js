import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  //CRIANDO A FÓRMULA DE CRIAR UM PRODUTO

  const product = {
    id: 0,
    name: '',
    brand: '',
    price: 0
  }

  //CRIANDO AS CONSTANTES

  const [products, setProducts] = useState([])
  const [btnCreate, setBtnCreate] = useState(true);
  const [objProduct, setObjProduct] = useState(product)

  //BUSCANDO TODOS OS PRODUTOS DA BASE DE DADOS

  useEffect(() => {
    fetch("http://localhost:8080/api/products/").finally()
    .then(productsReturn => productsReturn.json())
    .then(products_json => setProducts(products_json));
  }, []);

  //DETECTANDO OS VALORES DO INPUT

  const whenTyping = (e) =>{
    setObjProduct({...objProduct, [e.target.name]:e.target.value})
  }

  //FAZENDO O MÉTODO POST

  const createProduct = () =>{
    fetch("http://localhost:8080/api/products/create", {
      method:'post',
      body: JSON.stringify(objProduct),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(returnAPI => returnAPI.json())
    .then(converted_return => {
      if(converted_return.error !== undefined){
        alert(converted_return.error);
      }else{
        setProducts([... products, converted_return])
        alert('Cadastro efetuado com sucesso.')
        clearForm();
      }
    })
  }

  //APÓS CADASTRAR O PRODUTO, LIMPAR TODOS OS INPUTS

  const clearForm = () =>{
    setObjProduct(product)
    setBtnCreate(true)
  }

  //SELECIONAR PRODUTOS

  const selectProduct = (index) =>{
    setObjProduct(products[index])
    setBtnCreate(false)
  }

  //DELETAR PRODUTO
  const deleteProduct = () =>{
    fetch("http://localhost:8080/api/products/delete/"+objProduct.id, {
      method:'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(returnAPI => returnAPI.json())
    .then(converted_return => {
      alert(converted_return.error)

      let tempVector = [...products]
      let index = tempVector.findIndex((p) => {
        return p.id === objProduct.id;
      });

      tempVector.splice(index, 1)
      setProducts(tempVector)
      clearForm()
    })
  }

  //ALTERAR PRODUTO
  const update = () =>{
    fetch("http://localhost:8080/api/products/update/"+objProduct.id, {
      method:'put',
      body: JSON.stringify(objProduct),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(returnAPI => returnAPI.json())
    .then(converted_return => {
      if(converted_return.error !== undefined){
        alert(converted_return.error);
      }else{
        alert('Produto alterado com sucesso.')
        let tempVector = [...products]
        let index = tempVector.findIndex((p) => {
        return p.id === objProduct.id;
        });

        tempVector[index] = objProduct;
        setProducts(tempVector)
        clearForm();
      }
    })
  }

  return (
    <div className="App">
      <Form botao={btnCreate} eventKeyboard={whenTyping} createProduct={createProduct} obj={objProduct} cancel={clearForm} deleteProduct={deleteProduct} update={update}/>
      <Table vetor ={products} select={selectProduct}/>
    </div>
  );
}

export default App;
