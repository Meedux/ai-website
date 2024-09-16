import Link from 'next/link'
import React from 'react'
import NavbarContent from './NavbarContent'

const BaseNavbar = () => {
  return (
    <>
      <div className="navbar bg-transparent absolute top-0 z-10">
        <NavbarContent />
      </div>
    </>
  )
}

export default BaseNavbar