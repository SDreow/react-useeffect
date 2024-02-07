import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWidowSize] = useState(window.innerWidth)

  const sizeControl = () => {
    setWidowSize(window.innerWidth)
  }

  useEffect( () => {
    window.addEventListener("resize", sizeControl)
    return () => {
      window.removeEventListener("resize", sizeControl)
    }
  } )

  return<>
    <h1>Šířka okna</h1>
    <h2>{windowSize}</h2>
  </>
}

export default App