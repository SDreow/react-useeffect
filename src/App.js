// Ukaž skryj
import { useState } from "react"
import Book from "./components/Book"

const App = () => {
  const [show, setShow] = useState (false)

  return<>
  <button onClick={ () => setShow(!show)}>Ukaž / skyrj</button>
  {show && <Book />}

  </>
}

export default App