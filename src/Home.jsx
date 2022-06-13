import React from 'react'
import Data1 from "./Card-Data/fitness products/Data";
import Data2 from "./Card-Data/body products/Data";
import Data3 from "./Card-Data/Stuffed_Animals/Data";
import Data4 from "./Card-Data/Headphones/Data";
import Data5 from "./Card-Data/shoes/Data";
import Data6 from "./Card-Data/perfume/Data";
import Hero from './components/Hero';
import Client from './components/Client';
import Footer from './components/Footer';
const Home = () => {
  return (
    <div>
      <Hero />
      <Data6 />

      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
      <Client />
      <Footer />
    </div>
  );
}

export default Home