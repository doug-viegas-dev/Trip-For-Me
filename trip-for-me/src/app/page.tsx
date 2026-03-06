import Hero from '@/components/Hero';
import styles from './page.module.scss';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Top from '@/components/Top';
import Trips from '@/components/Trips';

export default function Home() {
  return (
    <main className={styles.main}>
     <Hero />
     <About />
     <Testimonials />
     <Top/>
     <Trips/>
    </main>
  );
}