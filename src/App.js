import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [data, setData] = useState([])
  
const handleClick = ()=>{
    fetch('https://sheetdb.io/api/v1/tjn1sipgmfd3h')
  .then((response) => response.json())
  .then((data) =>setData(data));}


  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Data</button>
      {data.map((items)=>(
        <div key={items.id}> {items.Email_Address} </div>
      ))}
    </div>
  );
}

export default App;
