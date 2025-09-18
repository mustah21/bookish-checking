import React from 'react';
import '../styles/about.css';
import about from '../images/about.png';
import Testi from './Testimonials';

const OriginContainer = () => (
  <div className="container">
    <h3 className='question'>How did we originate?</h3>
    <p className='question-text'>We started with a simple idea:
      Reading should be affordable and accessible to everyone.
      Many book lovers struggle to buy new books regularly,
      so we built a platform that allows readers to loan instead of own,
      making stories and knowledge easier to reach.</p>
  </div>
);

const WhyServeContainer = () => (
  <div className="container">
    <h3 className='question'>Why do we serve?</h3>
    <p className='question-text'>We believe stories and knowledge are meant to be shared.
      By offering an affordable digital library where readers
      can also keep personal notes. We aim to make reading
      more sustainable, inclusive, and rewarding.</p>
  </div>
);

const WhoServeContainer = () => (
  <div className="container">
    <h3 className='question'>Who do we serve?</h3>
    <p className='question-text'>We serve passionate readers who want access to a wide
      variety of books without the burden of constant purchases.
      Whether you’re a student, a casual reader, or someone who
      simply loves learning, our library is designed for you.</p>
  </div>
);


const About = () => {
  return (
    <main>
      <article>
        <div className='page'>
          <div className="about-container">
            <div className='main-text-content'>
              <h1 className='about-title'>About Bookish</h1>
              <h3 className='about-text'>Bookish is a project by Metropolia UAS <br></br>
                students inspired by the hindrance faced  <br></br> by readers.
                We set out to solve the problems<br></br> faced
                by many readers around the globe.</h3>
            </div>
            <div className="aboutlogo-div">
              <img src={about} alt="BookIcon" className="about-logo" />
            </div>
          </div>
          <div className="container-wrapper">
            <OriginContainer />
            <WhyServeContainer />
            <WhoServeContainer />
          </div>

          <Testi />
        </div>
      </article>

    </main>
  )
}

export default About;