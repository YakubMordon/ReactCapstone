import { useEffect } from 'react';
import Testimonials from './Testimonials';
import Specials from './Specials';
import About from './About';
import Hero from './Hero';
import './Main.css';

export default function Main({initializeTimes}) {
  useEffect(()=>{
    initializeTimes();
  },[])
  
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}
