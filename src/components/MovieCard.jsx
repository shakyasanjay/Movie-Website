import React from 'react'
import star from "../assets/Rating.svg";
import blankImg from "../assets/No-Poster.svg";

const MovieCard = ({movie: {title, vote_average, poster_path, release_date, original_language}}) => {
  return (
    <div className="movie-card">
      <p className="text-white">
        <img
          src={
            poster_path
              ? `http://image.tmdb.org/t/p/w500/${poster_path}`
              : blankImg 
          }
          alt={title}
        />
      </p>

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src={star} alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className='lang'>{original_language}</p>

          <span>•</span>
          <p className='year'>{release_date ? release_date.split('-')[0] : "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard
