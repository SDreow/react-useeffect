import { useState, useEffect } from "react"

const App = () => {

  const [value, setValue] =useState(0)
  const [test, setTest] =useState(0)
  

  useEffect( () => {
    const button = document.querySelector(".btn")
    if (value >= 1) {
    console.log(button.textContent = `Klik číslo ${value}`)
    } else {
      button.textContent = "Klikni"
    }
    
  }, [value]) //pouze jednou renderuje [], uvnitř nastavit proměnou která určuje spuštění useEffectu

  useEffect( () => {
    document.title = `Nový titulek ${test}`
  }, [test])

  return<>
    <h1>Začínáme</h1>
    <p>{value}</p>
    {console.log("Já jsem return")}
    <button className="btn" onClick={ () => setValue(value + 1)}>Klikni</button>

    <button onClick={ () => setTest(test + 1)}>Titulek</button>
  </>
}

export default App