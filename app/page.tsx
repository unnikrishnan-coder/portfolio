import { Header, About, Work, Skills, Footer } from './container/index';
import Navbar from './components/Navbar/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </>
  )
}
