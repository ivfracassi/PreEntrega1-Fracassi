import NavBar from "./components/NavBar"
import ItemListContainer from "./components/itemListContainer"

const App = () =>{
  return(
    <>
    <div>
      <NavBar/>
      <ItemListContainer greeting={"BIENVENIDOS A TECNOCOM"}/>
    </div>
    </>
  )
}

export default App