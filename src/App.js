import { useState, useEffect } from "react"

const App = () => {
  const[quote, setQuote] = useState("vychozí text")
  const url = "https://api.kanye.rest/"
  

 
  //asynch = asynchroní JS
  //await = čeká se
  //fetch = sběr

const getQuote = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const finalyQuote = (data["quote"])
  setQuote(finalyQuote)
}

useEffect ( () => {
  getQuote()
}, [])


  

  return<>
    <h1>{quote}</h1>
  </>
}

export default App