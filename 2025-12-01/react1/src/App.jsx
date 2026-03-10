import { createContext } from 'react'
import './App.css'
import Informacja from './components/Informacja';

export const NazwaMotywu = createContext("ciemny");

function App() {

  return (
    <>
      <Informacja/>
    </>
  )
}

export default App
