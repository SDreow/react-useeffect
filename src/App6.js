//Multiple returns
import { useState, useEffect } from "react"
const url = "http://api.open-notify.org/iss-now.json"

const App = () => {
  const [loading, setLoading] = useState (true)
  const [latitude, setLatitude] =useState("")
  const [longitude, setLongitude] =useState("")
  
  useEffect( () => {
      fetch(url) //then = počkej a ulož
        .then( (response) => response.json() )
        .then( (data) => data["iss_position"] )
        .then( (position) => {
            setLatitude(position["latitude"])
            setLongitude(position["longitude"])
        } )
      setLoading(false)  
  }, [])

  if(loading){
    return <>
    <h2>Načítání stránky...</h2>
  </>
  }

    return <>
    <h1>Zeměpisná šířka</h1>
    <p>{latitude}</p>
    <h1>Zeměpisná délka</h1>
    <p>{longitude}</p>
  </>
  

}

export default App