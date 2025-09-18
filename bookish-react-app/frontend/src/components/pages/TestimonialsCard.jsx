import '../styles/testimonial.css';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="testimonial-card">
      <p className="quote">“{quote}”</p>
      <span className="author">— {author}</span>
    </div>
  );
};

export default TestimonialCard;
