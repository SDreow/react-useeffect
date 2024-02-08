//Short circuit evaluation
const App = () => {
  const value = "david"
  const value2 = 0

  const result1 = value && value2
  //první je true a druhé jakékoliv = se vrací druhá hodnota
  //první je false a druhé jakékoliv = vrací se první hodnota
  // console.log(result1)ˇ

  const result2 = value || "tomas"
  //první je true a druhé jakékoliv = vrací první
  //první je false, tak vrací druhou hodnotu
  console.log(result2)

  return<>
    <h1>{value2 || "Defalutní text"}</h1>
    {value2 && <h1>Super tajný nadpis</h1>}
  </>
}

export default App