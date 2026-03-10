import { useState } from 'react'
import './App.css'
import Osoba from './components/Osoba';

function App() {

  const [imgNum,setImgNum] = useState(0)

  function GetOsoby()
  {
    let wynik = [];
    for(let i = 0;i<imgNum;i++) wynik = [...wynik,<Osoba key={i}/>];
    return wynik;
  }

  return (
    <>
      <input type="number" id='num' min={0} max={50} />
      <button onClick={()=>setImgNum(parseFloat(document.getElementById("num").value))}>ok</button>
      
      <div className='container'>
        {GetOsoby()}
      </div>
    </>
  )
}

export default App
