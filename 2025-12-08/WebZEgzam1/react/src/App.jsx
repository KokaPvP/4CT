import { useState } from 'react'
import './App.css'


function App() {
  const [zdjecia,setZdjecia] = useState([
    {id: 0, alt: "Mak", filename: `obraz1.jpg`, category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: `obraz2.jpg`, category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: `obraz3.jpg`, category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename:`obraz4.jpg`, category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: `obraz5.jpg`, category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: `obraz6.jpg`, category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: `obraz7.jpg`, category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: `obraz8.jpg`, category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: `obraz9.jpg`, category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: `obraz10.jpg`, category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: `obraz11.jpg`, category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: `obraz12.jpg`, category:3, downloads: 321}
  ]);

  const [activeCategories,setActiveCategories] = useState([1,2,3])

  function ZmienKategorie(kategoria, on)
  {
  if(on) setActiveCategories([...activeCategories,kategoria])
  else setActiveCategories(activeCategories.filter(v=>v!=kategoria))
  }

  function Pobierz(el)
  {
     setZdjecia(zdjecia.map(v=>{
      if(v!=el) return v;
      else{
        let nowyEl = el;
        nowyEl.downloads++;
        return nowyEl;
      }
    }))
  }

  return (
    <>
      <h1>Kategorie Zdjęć</h1>

      <label><input type="checkbox" onChange={(e)=>ZmienKategorie(1,e.target.checked)} checked={activeCategories.includes(1)}/>Kwiaty</label>
      <label><input type="checkbox" onChange={(e)=>ZmienKategorie(2,e.target.checked)} checked={activeCategories.includes(2)}/>Zwierzęta</label>
      <label><input type="checkbox" onChange={(e)=>ZmienKategorie(3,e.target.checked)} checked={activeCategories.includes(3)}/>Samochody</label>

      <section className='Galeria'>
        {
          zdjecia.map((el,i)=>{
            if(activeCategories.includes(el.category)) return (
              <div key={i} className='zdjecie'>
                <img src={"src/assets/"+el.filename} alt={el.alt} />
                <p>Pobrania: {el.downloads}</p>
                <button onClick={()=>Pobierz(el)}>Pobierz</button>
              </div>
            )
            else return (
              <></>
            )
          })
        }
      </section>
    </>
  )
}

export default App
