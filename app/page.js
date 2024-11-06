import dynamic from "next/dynamic";
// import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
const About = dynamic(() => import('./sections/About'), { 
  ssr: false
})

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Projects/> */}
      <Experience/>
      <Contacts/>
      <Footer/>
    </main> 
    )

}
