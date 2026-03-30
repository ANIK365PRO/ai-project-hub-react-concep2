// 1. function, method, component, hooks
// 2. props
// 3. parent -> child.


import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Models from './Components/Models/Models'
import NavBar from './Components/NavBar/NavBar'


const getModels = async () =>{
   const res = await fetch('/models.json')
   return res.json()
}
const modelPromise = getModels()

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
        
       <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>
         
    

    </>
  )
}

export default App
