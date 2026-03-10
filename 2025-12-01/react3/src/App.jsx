import { createContext, useState } from "react"
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const Motyw = createContext("czerwony");

function App() {
  const [wybranyMotyw,setWybranyMotyw] = useState("czerwony");

  return (
    <>
    <Motyw.Provider value={wybranyMotyw}>
    <Header/>
    <div className={"select"}>
      Wybierz motyw:
      <select onChange={(e)=>setWybranyMotyw(e.target.value)}>
        <option value="czerwony">czerwony</option>
        <option value="zielony">zielony</option>
        <option value="niebieski">niebieski</option>
      </select>
    </div>
    <Main/>
    <Footer/>
    </Motyw.Provider>
    </>
  )
}

export default App
