import React from 'react'
import './Intro.css';
import introImg1 from '../../assets/introo1.png';
import introImg2 from '../../assets/introo2.png';
import introImg3 from '../../assets/introo3.png';
import backji from '../../assets/backji.webp';
import mobile1 from '../../assets/mobile1.webp';
import Slider from '../Slider';
import Footer from '../footer/Footer';

const Intro = () => {
  return (
    <>
    <div className="intro">
        <div className="intro__head">
            <h1>Organize your</h1>
            <h1>work and your life,finally.</h1>
        </div>
            
        <div className="intro__explain">
            <p>Concentrate, organize and bring calm to your</p>
            <p>life with Todoist. The application of to-do lists</p>
            <p>and task management # 1 in the world.</p>
        </div>

        <button>Try it for free</button>

    </div>

    <div className="intro__image">
            <img src={introImg1} alt="" className='firstImage' />
            <img src={introImg2} alt="" className='secondImage'/>
            <img src={introImg3} alt="" className='thirdImage' />
    </div>
    
    <div className="intro__imagetext">
           <img src={backji} alt="" />
           <div className="lefttext">
              <p>MORE THAN 300 THOUSAND <br/> VALUATIONS</p>

              <p>★ ★ ★ ★ ★</p>
              <p>App Store and Google Play</p>
           </div>
           <div className="righttext">
              <p>USED BY INDIVIDUALS AND TEAMS <br/> IN</p>
           </div>
    </div>

    <div className="aboutApp">

        <div className="aboutApp__left">
          <p>Achieve more</p>
          <h3>Add your homework.<br/>Organize your life.<br/>Get more every day.</h3>
          <p>Add tasks like “ Read work emails every day at 10am ” <br/>to make your to-do list in seconds using colloquial <br/>language recognition and Todoist's periodic dates.</p>
        </div>

        <div className="aboutApp__right">
           <img src={mobile1} alt="" />
        </div>

    </div>

    <div className="promotion">
        <h2>"Todoist makes the simple or the <br/>complex easy, it depends on how </h2>
        <h2>you want to do it"</h2>
        <h2>– The Verge</h2>
        <a href="">Explore more feature</a>
    </div>

    {/* <Slider/> */}
    
    <Footer/>

    </>
  )
}

export default Intro