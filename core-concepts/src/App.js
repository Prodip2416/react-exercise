import React, { useState, useEffect } from 'react';
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
        {
          productList.map(pd => <Product product={pd} />)
        }
        {/* <Product product={productList[0]} />
        <Product product={productList[1]} />
        <Product product={productList[2]} />
        <Product product={productList[3]} /> */}
      </div>
      <div style={{ marginTop: '250px' }}>
        <Person name="Sakib" hobby="Bolling" />
        <Person name="Mushi" hobby="Wicket-kipping" />
        <Person name="Tamim" hobby="Bating" />
      </div>
      <Count />
      <br />
      <Users />
      <br />
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li> <b> Name : </b>{user.name}, <b>Email :</b> {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Count() {
  const [count, setState] = useState(10);
  // const Increment = () => setstate(count + 1);
  // const Decrement = () => setstate(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setState(count + 1)}>Increase</button>
      <button onClick={() => setState(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  // console.log(props);
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
  // console.log(props);
  return (
    <div style={myStyle}>
      <h3>Name : {props.name}</h3>
      <h4>Hobby : {props.hobby}</h4>
    </div>
  )
}

export default App;
