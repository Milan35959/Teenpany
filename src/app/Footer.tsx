import React from 'react'
import {  Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
     <footer id="contact" className="bg-[url('/assets/bg6.avif')] text-black h-[1000px] md:h-[600px] py-12">
        <div className="container mx-auto px-4">
        <div className='m-3 flex flex-col items-center mb-8'>
            <Image
              src='/assets/logof.png'
              alt='Logo not found'
              width={150} height={150}
              className="mb-2"
            />
            <h2 className='font-bold text-lg md:text-2xl '>Live Freely. Drink Responsibly.</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={20} className="mr-2" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  <span>info@jackdaniels.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  <span>123 Main St, Anytown, USA</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-gray-700">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-700">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-700">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-gray-700">
                    Why Us?
                  </a>
                </li>
                <li>
                  <a href="#outlets" className="hover:text-gray-700">
                    Outlets
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-700">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-700">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-700">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center font-semibold">
            <p>JACK DANIEL DISTILLERY LYNCHBURG, TENNESSEE</p>
            <p>JACK, JACK DANIEL'S, OLD NO. 7, GENTLEMAN JACK, and JD are trademarks. © 2025 Jack Daniel's Properties, Inc. </p>
            <p> All rights reserved.</p>
            <p>All other trademarks and trade names are properties of their respective owners.</p>
            <p>Please do not share or forward with anyone under the legal drinking age.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
