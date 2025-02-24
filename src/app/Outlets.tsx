import React from 'react'
import Image from 'next/image'
function Outlets() {
  return (
    <div>
       <section id="outlets" className="bg-[url('/assets/bg5.avif')] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-knockout">Our Outlets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-black-2 gap-8">
            {[
              {
                name: "Downtown Store",
                address: "123 Main St, Downtown",
                image: "/assets/outlet.jpg?height=300&width=400&text=Downtown+Store",
              },
              {
                name: "Uptown Boutique",
                address: "456 High St, Uptown",
                image: "/assets/outlet1.jpg?height=300&width=400&text=Uptown+Boutique",
              },
              {
                name: "Riverside Shop",
                address: "789 River Rd, Riverside",
                image: "/assets/outlet2.jpg?height=300&width=400&text=Riverside+Shop",
              },
            ].map((outlet) => (
              <div key={outlet.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={outlet.image || "/placeholder.svg"}
                  alt={outlet.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{outlet.name}</h3>
                  <p className="text-gray-600 mb-4">{outlet.address}</p>
                  <a
                    href="#"
                    className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full inline-block hover:bg-yellow-400 transition duration-300"
                  >
                    Visit Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Outlets
