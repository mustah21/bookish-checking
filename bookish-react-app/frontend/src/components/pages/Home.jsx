import '../styles/home.css';
import logo from '../images/logoOne.png';
import Hero from './Hero';
// import Recommendation from './Recommendations';
const Home = () => {
  return (

    <main>
       <Hero />

      <article className='home-art'>
        <div className="content-container">
          <div className="text-content">
            <h2 className="main-text">
              Looking for a digital <br />
              note taking library for<br />
              your favourite books?</h2>

            <h3 className="below-text">
              We have you covered sign up <br />
              with us to start your journey!</h3><br />
            <button className='button'><a href="/sign-up" className='btn-text'>
              Get Started
            </a></button>
          </div>
          
          <div className="logo-div">
            <img src={logo} alt="Book Icon" className="logo" />
          </div>
        </div>
      </article>
    </main>


  );
}

export default Home;
