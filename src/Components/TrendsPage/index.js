import React from 'react'

function TrendsPage() {
    return (
        <section id="trendingPreview" className="trendingPreview-container">
            <div class="trendingPreview-header">
                <h2 class="trendingPreview-title">Tendency</h2>
                <button class="trendingPreview-btn">See more</button>
            </div>
        <article className="trendingPreview-movieList">
            <div className="movie-container"> 
                <img className="movie-img" src="./asset/silvan.png" alt="movie" />
            </div>
        </article>
    </section>
    )
}

export { TrendsPage }