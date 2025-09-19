import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ShopByCategory from '@/components/ShopByCategory';
import ShopByConcern from '@/components/ShopByConcern';
import Bestsellers from '@/components/Bestsellers';
import DermatSection from '@/components/DermatSection';
import NewLaunches from '@/components/NewLaunches';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials'; 
import HomeSections from '@/components/HomeSections';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ShopByCategory />
      <ShopByConcern />
      <Bestsellers />
      <DermatSection />
      <NewLaunches />
      <Testimonials />
      <HomeSections />
      <Footer />
    </>
  );
}