import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categorydata }  from '../CategoriesPage/categorydata'

function MovieDetailsPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const category = categorydata.find(movie => movie.slug === slug)

    const returnToCategory = () => {
        window.history.back();
        navigate('/category')

    }

    return (
        <>
            <p>{category?.title}</p>
            <button onClick={() => returnToCategory()}>Return to Category</button>
            <p>{category?.description}</p>
            <p>{category?.author}</p>        
        
        </>
    )

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
  )*/}
    }
    

export {MovieDetailsPage}