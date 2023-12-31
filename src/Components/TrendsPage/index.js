import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TrendsPage.css'

function TrendsPage() {
    const navigate = useNavigate()

    const returnToDetails = () => {
        navigate('/details')
    }

    return (
        <section id="trendingPreview" className="trendingPreview-container">
            <div className="trendingPreview-header">
                <h1 onClick={() => returnToDetails()} className="trendingPreview-title">Trending</h1>
                <button onClick={() => returnToDetails()} className="trendingPreview-btn">See more</button>
            </div>
        <article className="trendingPreview-movieList">
            <div className="movie-container"> 
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='movie-container-img'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
            </div>
        </article>
    </section>
    )
}

export { TrendsPage }