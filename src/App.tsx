import Navbar from "@/scenes/navbar"
import { useState } from "react"
import { SelectedPage } from "@/shared/types"
import { useEffect } from "react"
import Home from "@/scenes/Home"
import Benefits from "@/scenes/Benefits"
import Classes from "@/scenes/Classes"
import ContactUs from "@/scenes/Contact"
import Footer from "@/scenes/Footer"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="app bg-black">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage} />
      <Benefits
        setSelectedPage={setSelectedPage} />
      <Classes
        setSelectedPage={setSelectedPage} />
  
      <ContactUs
        setSelectedPage={setSelectedPage} />
      <Footer
      />

    </div>
  )
}

export default App
