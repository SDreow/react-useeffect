// Ternární operátor

const App = () => {
    const error = true
    return<>
      {error ? <p>Chyba</p> : <h2>Obsah stránky</h2> }
    </>
  }
  
  export default App