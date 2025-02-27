"use client"
import React, { useEffect } from "react"
import Image from "next/image"

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0")
              entry.target.classList.remove("opacity-0", "translate-y-10")
            }, 2000) // 2 seconds delay
          }
        })
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div>
      <section id="about" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image with Scroll Animation */}
            <div className="md:w-1/2 mb-8 md:mb-0 fade-in opacity-0 translate-y-10 transition-all duration-1000 ease-out ">
              <Image
                src="/assets/bg4.jpg"
                alt="About Finest Spirits"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Text Content with Scroll Animation */}
            <div className="md:w-1/2 md:pl-12 fade-in opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <h2 className="text-3xl text-slate-200 font-bold mb-4 font-knockout">About Jack Daniels</h2>
              <p className="text-gray-400 mb-6">
                At Jack Daniels, we are passionate about bringing you the best selection of premium liquors from around
                the world. With years of experience and a dedication to quality, we ensure that every bottle in our
                collection meets the highest standards.
              </p>
              <p className="text-gray-400 mb-6">
                Whether you &apos; re a connoisseur or just beginning your journey into the world of fine spirits, our
                knowledgeable staff is here to guide you and help you discover your new favorites.
              </p>
              <a
                href="#contact"
                className="bg-gray-900 text-[#baab8f] px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
