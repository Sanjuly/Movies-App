import React from 'react'

function CategoriesPage() {
    return (
        <section>
        <article className="categories-list">
            <div className="category-container">
                <h3 id="id28" class="category-title">Romance</h3>
            </div>
            <div className="category-container">
                <h3 id="id16" class="category-title">Drama</h3>
            </div>
            <div className="category-container">
                <h3 id="id14" className="category-title">Action</h3>
            </div>
        </article>

        <article class="relatedMovies-container">
            <h2 class="relatedMovies-title">Similar Movies</h2>
            <div class="relatedMovies-scrollContainer">
                <div class="movie-container">
                    <img
                    src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                    class="movie-img"
                    alt="name of the movie"/>
                </div>
                <div class="movie-container">
                    <img
                        src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                        class="movie-img"
                        alt="name of the movie"/>
                </div>
                <div class="movie-container">
                    <img
                        src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                        className="movie-img"
                        alt="name of the movie"/>
                </div>
            </div>
        </article>
    </section>
    )
}
export { CategoriesPage }