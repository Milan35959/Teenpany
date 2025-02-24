import React from 'react'
import {Award,
    Truck,
    Clock,
    Wine,
  } from "lucide-react"
const Whyus = () => {
  return (
    <div>
      <section id="why-us" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Jack Daniels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="mx-auto mb-4 text-yellow-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-gray-600">Curated collection of the jack daniels from around the world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="mx-auto mb-4 text-yellow-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="mx-auto mb-4 text-yellow-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our expert team is always here to assist you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Wine className="mx-auto mb-4 text-yellow-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">Tasting Events</h3>
              <p className="text-gray-600">Regular tasting events to explore new flavors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Whyus
