import Testimonials from './Testimonials';
import Specials from './Specials';
import About from './About';
import Hero from './Hero';
import './Main.css';

export default function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}
