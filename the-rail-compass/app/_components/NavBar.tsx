import React from 'react'

const NavBar = () => {
  return (
    <div className="flex gap-3">
        <div className="">
            <a href="/">Home</a>
        </div>
        <div className="">
            <a href="/about">About</a>
        </div>
        <div className="">
            <a href="/contact">Contact</a>
        </div>
    </div>
  )
}

export default NavBar