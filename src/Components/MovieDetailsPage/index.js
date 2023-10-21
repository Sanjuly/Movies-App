import React from 'react'

function MovieDetailsPage() {
  return (
    <>
    <section id="genericList" className="genericList-container inactive">
        <div className="movie-container">
            <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                className="movie-img"
                alt="name of movie" />
        </div>
        <div className="movie-container">
            <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                className="movie-img"
                alt="name of movie" />
        </div>
        <div className="movie-container">
            <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                className="movie-img"
                alt="name of movie" />
        </div>
    </section>

    <section id="movieDetail" className="movieDetail-container inactive">
        <h1 className="movieDetail-title">Dead</h1>
        <span className="movieDetail-score">7.6</span>
        <p className="movieDetail-description">
            Wisecracking mercenary Dead battles the evil and powerful Cable and other bad guys to save a boy's life.
        </p>
    </section>
    </>
    )
    }
    

export {MovieDetailsPage}