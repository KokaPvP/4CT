import { createContext } from 'react'
import './App.css'
import Informacja from './component/Informacja';

export const AppData = createContext();

function App() {

  return (
    <>
      <AppData.Provider value={{stronamocy:"ciemna",userName:"Grzegorz"}}>
        <Informacja/>
      </AppData.Provider>
    </>
  )
}

export default App
