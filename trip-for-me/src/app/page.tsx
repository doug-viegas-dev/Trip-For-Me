import Hero from '@/components/Hero';
import styles from './page.module.scss';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Top from '@/components/Top';
import Trips from '@/components/Trips';
import Why from '@/components/Why';
import Ready from '@/components/Ready';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
     <Hero />
     <About />
     <Testimonials />
     <Top/>
     <Trips/>
     <Why/>
     <Ready/>
     <Footer/>
    </main>
  );
}