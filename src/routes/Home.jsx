import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
//import Work from "../components/Work"
import Footer from '../components/Footer';
import GetTime from '../components/GetTime';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <GetTime />
      {/* <Work /> */}
      <Footer />
    </div>
  )
}

export default Home