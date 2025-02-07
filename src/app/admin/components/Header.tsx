"use client"
import { Menu } from 'lucide-react'
import React from 'react'

// Define proper typing for the toggleSidebar prop
interface HeaderProps {
  toggleSidebar: () => void;  // toggleSidebar is a function that takes no arguments and returns void
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <section className="flex items-center gap-3 bg-white border-b px-4 py-4">
      <div className="flex items-center justify-center md:hidden">
        <button onClick={toggleSidebar}><Menu /></button>
      </div>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div></div>
    </section>
  )
}

export default Header
