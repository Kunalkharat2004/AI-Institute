import React from 'react'
import vitlogo from "../../assets/vit_logo.jpeg"

const Navbar = () => {
  return (
    <>
          <header className="flex justify-between items-center py-4 px-6 bg-secondary text-white shadow-md">
          <div className="flex items-center space-x-4">
            <img src={vitlogo} alt="Institute Logo" className="h-10" />
            <div>
              <h1 className="text-xl font-bold">Vishwakarma Institute of Technology, Pune</h1>
              <p className="text-sm">BTech-Information Technology</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">3G 📶 1.35 Mbps</span>
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">PM</span>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar