"use client"
import { useState} from "react"
import React from 'react'
import Image from 'next/image'
import { ShoppingCart,ChevronLeft,ChevronRight } from 'lucide-react'
const Feature = () => {
    const [currentProductSetIndex, setCurrentProductSetIndex] = useState(0)

  const productSets = [
    [
      { name: "JD with Honey", image: "/assets/product1.webp" },
      { name: "Single Barrel(RYE)", image: "/assets/product3.jpg" },
      { name: "Single Barrel(Select)", image: "/assets/product2.jpg" },
    ],
    [
      { name: "JD", image: "/assets/product4.webp" },
      { name: "JD (RYE)", image: "/assets/product5.jpg" },
      { name: "American Single Malt", image: "/assets/product6.webp" },
    ],
    [
      { name: "Tennese Apple", image: "/assets/product7.jpg" },
    ],
  ]

  const nextProductSet = () => {
    setCurrentProductSetIndex((prevIndex) => (prevIndex + 1) % productSets.length)
  }

  const prevProductSet = () => {
    setCurrentProductSetIndex((prevIndex) => (prevIndex - 1 + productSets.length) % productSets.length)
  }
  return (
    <div>
      <section id="products" className="py-16 relative bg-[url('/assets/bg4.avif')]  bg-cover  bg-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-knockout text-center text-white mb-12">Featured Products</h1>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProductSetIndex * 100}%)` }}
              >
                {productSets.map((productSet, setIndex) => (
                  <div key={setIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {productSet.map((product) => (
                      <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                      {/* Image Container */}
                      <div className="relative h-48 flex justify-center items-center bg-gray-100">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="object-contain max-h-full"
                        />
                      </div>
                    
                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 font-knockout mb-4 flex-grow">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    
                        {/* Price & Button */}
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-xl font-bold font-knockout">$49.99</span>
                          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full flex items-center">
                            <ShoppingCart className="mr-2" size={20} />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevProductSet}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProductSet}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature
