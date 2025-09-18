import React from 'react';
import RecommendationBox from './RecommendationBox';
import '../styles/recommendation.css';

const recommendationsData = [
  {
    author: "Alex, Student",
    title: "Harry Potter",
    genre: "Fantasy",
    image: "https://picsum.photos/200/300?random=1"
  },
  {
    author: "Maria, Teacher",
    title: "The Science of Space",
    genre: "Science",
    image: "https://picsum.photos/200/300?random=2"
  },
  {
    author: "John, Developer",
    title: "Learning Python",
    genre: "Programming",
    image: "https://picsum.photos/200/300?random=3"
  },
  {
    author: "Sara, Designer",
    title: "Colors of Creativity",
    genre: "Art & Design",
    image: "https://picsum.photos/200/300?random=4"
  },
  {
    author: "Michael, Historian",
    title: "Ancient Civilizations",
    genre: "History",
    image: "https://picsum.photos/200/300?random=5"
  },   {
    author: "Alex, Student",
    title: "Harry Potter",
    genre: "Fantasy",
    image: "https://picsum.photos/200/300?random=1"
  },
  {
    author: "Maria, Teacher",
    title: "The Science of Space",
    genre: "Science",
    image: "https://picsum.photos/200/300?random=2"
  },
  {
    author: "John, Developer",
    title: "Learning Python",
    genre: "Programming",
    image: "https://picsum.photos/200/300?random=3"
  },
  {
    author: "Sara, Designer",
    title: "Colors of Creativity",
    genre: "Art & Design",
    image: "https://picsum.photos/200/300?random=4"
  },
  {
    author: "Michael, Historian",
    title: "Ancient Civilizations",
    genre: "History",
    image: "https://picsum.photos/200/300?random=5"
  }
];

const Recommendation = () => {
  return (
    <section>
      <div className="recommendation-page">
      <div className="recommendation-header">
        <h1>Bookish Suggestions</h1>
      </div>

      <div className="book-container">
        {recommendationsData.map((item, index) => (
          <RecommendationBox
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            genre={item.genre}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Recommendation;
