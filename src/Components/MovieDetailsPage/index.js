import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categorydata }  from '../CategoriesPage/categorydata'
import './MovieDetailsPage.css'

function MovieDetailsPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const category = categorydata.find(movie => movie.slug === slug)
    
    const returnToCategory = () => {
        navigate('/category')
    }

    const renderView = () => {
    if (category) {
        return (
            <div className='container-details'>
                    <div className='container-details--title'>
                        <h1>{category?.title}</h1>
                        <button onClick={() => returnToCategory()}>Return to Category</button>
                    </div>
                    <div className='container-details--img'>
                        <img className='img-details' src={category?.img} alt='imag' />
                            <div className='text-details'>
                                <p className='text-details-p'>{category?.description}</p>
                                <p className='text-details-p'>{category?.author}</p>
                            </div>
                    </div>
                </div>
        )
    } else {
        return (
        <h2>No such movie found!</h2>
        )
    }}
        return (
            <>
                <div className='container-details'>
                    {renderView()}
                </div>
            </>
        )
    }
        
  // eslint-disable-next-line no-lone-blocks, no-unreachable
  {/*return (
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
  )*/

}

export { MovieDetailsPage }