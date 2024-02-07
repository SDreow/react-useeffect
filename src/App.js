import { useState, useEffect } from "react"

const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"
  const [latitude, setLatitude] =useState("")
  const [longitude, setLongitude] =useState("")
  const [urlMap, setUrlMap] =useState("")


  const getCoordinates = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])

    const iss_long  = data["iss_position"]["longitude"]
    const iss_lat = data["iss_position"]["latitude"]
    setUrlMap(`https://www.google.com/maps/@${iss_lat},${iss_long},2.79z?entry=ttu`)
  }

  useEffect ( () => {
    getCoordinates()
  }, [])
  

  


  return<>
    <h1>API</h1>
    <h2>Zěměpisná šířka</h2>
    <p>{latitude}</p>
    <h2>Zěměpisná délka</h2>
    <p>{longitude}</p>
    <a href={urlMap} target="_blank">Pozice ISS v mapě</a>
  </>
}

export default App