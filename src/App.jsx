// 1. function, method, component, hooks
// 2. props
// 3. parent -> child.


import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Models from './Components/Models/Models'
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/Cart/Cart'


const getModels = async () =>{
   const res = await fetch('/models.json')
   return res.json()
}
const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState('Models')
  const handleActiveTab = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
        
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mt-5">
        <input 
          type="radio" 
          name="my_tabs_1" 
          className="tab w-40 rounded-2xl text-xl font-semibold" 
          aria-label="Models"
          onClick={() => handleActiveTab('Models')} 
          defaultChecked />
        <input 
          type="radio" 
          name="my_tabs_1" 
          className="tab w-40 rounded-2xl text-xl font-semibold" 
          aria-label="Cart"
          onClick={() => handleActiveTab('Cart')}  />
          
      </div>


      {activeTab === 'Models' &&  <Models modelPromise={modelPromise}></Models>}
     {activeTab === 'Cart' && <Cart></Cart>}

      <Footer></Footer>
         
    

    </>
  )
}

export default App
