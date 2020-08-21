import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const productList = [
    {
      name: 'Photoshop',
      price: '$99.99'
    },
    {
      name: 'Illustrator',
      price: '$79.99'
    },
    {
      name: 'PDF Reader',
      price: '$19.99'
    },
    {
      name: 'Laptop',
      price: '$259.99'
    }
  ]
  return (
    <div className="App">
      <h1>React Components</h1>
      <div>
        <Product product={productList[0]} />
        <Product product={productList[1]} />
        <Product product={productList[2]} />
        <Product product={productList[3]} />
      </div>
      <div style={{marginTop:'250px'}}>
        <Person name="Sakib" hobby="Bolling" />
        <Person name="Mushi" hobby="Wicket-kipping" />
        <Person name="Tamim" hobby="Bating" />
      </div>


    </div>
  );
}

function Product(props) {
  console.log(props);
  const { name, price } = props.product;
  const productStyle = {
    color: 'black',
    backgroundColor: 'lightgray',
    margin: '10px',
    padding: '10px',
    border: '2px solid cyan',
    float: 'left',
    width: '310px'
  }
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button>buy now</button>
    </div>
  )
}

function Person(props) {
  const myStyle = {
    color: 'black',
    border: '2px solid cyan',
    margin: '5px'
  }
  console.log(props);
  return (
    <div style={myStyle}>
      <h3>Name : {props.name}</h3>
      <h4>Hobby : {props.hobby}</h4>
    </div>
  )
}

export default App;
