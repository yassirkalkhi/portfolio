import { useState } from 'react'
import reactLogo from './assets/react.svg'  
import viteLogo from '/vite.svg'
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import "./tailwindcss.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col items-center overflow-hidden selection:bg-white/20'>
         <Header></Header> 
       <Main></Main> 
       <Footer></Footer>

    </div>
         
    </>
  )
}

export default App
