import Banner from "./Components/Header/Banner/Banner"
import Navbar from "./Components/Header/Navbar/Navbar"
import Recipes from "./Components/Recipes/Recipes"


function App() {


  return (
    <>
      <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      </div>
      
    </>
  )
}

export default App
