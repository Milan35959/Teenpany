import Image from "next/image"
import { ShoppingCart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import Header from "./Header"
import Hero from "./Hero"
import Feature from "./Feature"
import Footer from "./Footer"
import About from "./About"
import Whyus from "./Whyus"
import Outlets from "./Outlets"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
    <Hero/>
      {/* Featured Products */}
    <Feature/>
      {/* About Section */}
    <About/>
    {/* Why Us */}
    <Whyus/>
    {/* outlet */}
    <Outlets/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}