//Multiple returns
import { useState, useEffect } from "react"
const url = "http://api.open-notify.org/iss-now.json"

const App = () => {
  const [loading, setLoading] = useState (false)
  
  useEffect( () => {
      fetch(url) //then = počkej a ulož
        .then( (response) => response.json() )
        .then( (data) => data["iss_position"] )
        .then( (position) => {
            console.log(position["latitude"])
            console.log(position["longitude"])
        } )
  }, [])

  if (loading){
    return <>
    <h2>Načítání stránky...</h2>
  </>
  }else {
    return <>
    <h1>Obsah stránky</h1>
  </>
  }

}

export default App