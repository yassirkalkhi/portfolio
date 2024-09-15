import { useState } from 'react'
import reactLogo from './assets/react.svg'  
import viteLogo from '/vite.svg'
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Contact from "./contact/Contact"
import NotFound from './404'
import UnderMaintenance from "./UnderMaintenance"
import "./tailwindcss.css"
import { Routes ,Router,Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col items-center overflow-hidden selection:bg-white/20'>
 
   
            
      <Routes>
  
        <Route path="/" element={<><Header/><Main/><Footer/></>} />
        <Route path="/home" element={<><Header/><Main/><Footer/></>} />
        <Route path="/about" element={<UnderMaintenance/>} />
        <Route path="/work"  element={<UnderMaintenance/>} />

       <Route path='*' element={<NotFound></NotFound>}/>
      </Routes> 

      

    </div>
         
    </>
  )
}

export default App
