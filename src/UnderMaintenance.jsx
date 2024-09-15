import React from 'react'
import {Link} from "react-router-dom"

const UnderMaintenance = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex items-center justify-center">
    <h1 className="text-white/80 sm:text-3xl font-light">
      503 |  Under Maintenance
      <Link to="/" className="block py-2 px-3 text-white transition-all text-center ease-linear rounded md:bg-transparent md:p-0 underline">Home</Link>
    </h1>
  </div>
  )
}

export default UnderMaintenance