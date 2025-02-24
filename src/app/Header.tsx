"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white fixed w-full top-0 z-[100]">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Image src="/assets/logo.png" alt="Logo not found" width={150} height={150} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#products" className="hover:text-gray-300">
            Products
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#why-us" className="hover:text-gray-300">
            Why Us?
          </a>
          <a href="#outlets" className="hover:text-gray-300">
            Outlets
          </a>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div
         className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0 hidden"
          } md:hidden`}
      >
        <a href="#home" className="text-xl py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
        <a href="#products" className="text-xl py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          Products
        </a>
        <a href="#about" className="text-xl py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
        <a href="#contact" className="text-xl py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
        <a href="#why-us" className="text-xl py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          Why Us
        </a>
        <a href="#outlets" className="text-xl py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          Outlets
        </a>
      </div>
    </header>
  )
}

export default Header
