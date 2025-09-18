import '../styles/hero.css';
import hero from '../images/hero2.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-content">
        <h1 className="library">📚 My Digital Library</h1>
        <p>Stop losing track of your thoughts.
           Build your personal knowledge library 
           and make every book you read more impactful.</p>
        <a href="/sign-up" className="cta-btn">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
