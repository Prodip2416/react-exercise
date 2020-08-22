import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image';

function App() {
  // Nayok list
  const [nayokList, setNayokList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayokList(data))
  }, [])

  // Image gallery create
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        // console.log(data[0].title);
        setImgList(data);
      })
  }, [])
  // const nayokList = [
  //   {
  //     name: 'Jashim',
  //     movie: 78
  //   },
  //   {
  //     name: 'Alamgir',
  //     movie: 56
  //   },
  //   {
  //     name: 'Razzak',
  //     movie: 135
  //   },
  //   {
  //     name: 'Elis kanchaan',
  //     movie: 85
  //   },
  //   {
  //     name: 'BappaRaz',
  //     movie: 52
  //   }
  // ];
  return (
    <div className="App">
      <Movie />
      {/* <Nayok name={names[0]} movie="80" />
      <Nayok name={names[1]} movie="40" />
      <Nayok name="Deepjol" /> */}
      {
        nayokList.map(nayok => <Nayok key={nayok.id} name={nayok.name} movie={nayok.movie} />)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {
        imgList.map(item => <Image key={item.id} id={item.id} title={item.title} image={item.url} />)
      }

    </div>
  );
}

function Movie() {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Total Movie : {count}</h3>
      <button onClick={clickHandle}>Add Movie</button>
      <MovieWatch count={count} />
      <MovieWatch count={count + 5} />
      <MovieWatch count={count + 10} />
    </div>
  )
}
function MovieWatch(props) {
  return (
    <div>
      <p>I have watch {props.count} movies</p>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '5px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <p>I have dove {props.movie || 0} movies.</p>
    </div>
  )
}

export default App;
