
import './App.css'
import User from './User'
import Counter from './Counter'

function App() {


  return (
    <>
      {/* o que tiver dentro do componente filho com propriedade, vai ser referenciado como  prop no componente pai */}
      <User name="Nick" />


      <Counter />
    </>
  )
}

export default App