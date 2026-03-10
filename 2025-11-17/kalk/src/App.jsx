import Dodawanie from "./components/Dodawanie";
import Odejmowanie from "./components/Odejmowanie";
import Mnozenie from "./components/Mnozenie";
import Dzielenie from "./components/Dzielenie";
import { useEffect, useState } from "react";

function App() {
  const [zmiana, setZmiana] = useState(0);
  const [komponent, setKomponent] = useState(<Dodawanie />)

  useEffect(()=>{
    if(zmiana == 0) setKomponent(<Dodawanie />);
    if(zmiana == 1) setKomponent(<Odejmowanie />);
    if(zmiana == 2) setKomponent(<Mnozenie />);
    if(zmiana == 3) setKomponent(<Dzielenie />);
  }, [zmiana]);

  return (
    <>
      <select onChange={(e)=>setZmiana(e.target.value)}>
        <option value="0">Dodawanie</option>
        <option value="1">Odejmowanie</option>
        <option value="2">Mnożenie</option>
        <option value="3">Dzielenie</option>
      </select>
      {komponent}
    </>
  )
}

export default App
