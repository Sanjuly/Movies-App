import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    const navigate = useNavigate()

    const returnToTrending = () => {
        navigate('/trends')
    }
    const returnToCategory = () => {
        navigate('/category')
    }
    const returnToDetails = () => {
        navigate('/details')
    }

    return (
        <>
            <div className="home-page">
                    <h1>Movies App</h1>
                    <p onClick={() => returnToTrending()}>Trending Movies</p>
                <div className='home-page--img'>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    
                </div>
                    <p onClick={() => returnToCategory()}>Movies by Category</p>
                <div className='home-page--img'>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                </div>
                    <p onClick={() => returnToDetails()}>Related Movies</p>
                <div className='home-page--img'>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/R.cb34f0364f75e362e1194f6ff87688ed?rik=sAwoNEzOVeqdRQ&pid=ImgRaw&r=0' alt='bg'/>
                    <img onClick={() => returnToDetails()} className='home-page-img-image'  src='https://th.bing.com/th/id/OIP.rjaA4zx33b5tVbRcLhX5JwHaJ9?w=184&h=247&c=7&r=0&o=5&pid=1.7' alt='bg'/>
                </div>
            </div>
        </>
    )
}
export { HomePage }