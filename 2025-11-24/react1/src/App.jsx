import './App.css'
import Weather from './components/Weather'

function App() {

  return (
    <>
      <Weather nazwa="Pszczyna" url="https://api.open-meteo.com/v1/forecast?latitude=49.9804&longitude=18.9538&current=temperature_2m,relative_humidity_2m,rain,snowfall,wind_speed_10m,wind_direction_10m"/>
    </>
  )
}

export default App
