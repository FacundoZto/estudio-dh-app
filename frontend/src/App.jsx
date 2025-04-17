import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
