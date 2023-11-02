import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categorydata } from './categorydata'
import './CategoriesPage.css'

function CategoriesPage() {
    return (
        <section className='category-card'>
            <div className='category-card--movie'>
                {categorydata.map(movie => (
                    <CategoryLink  key={movie.slug} movie={movie} />
                ))}
            </div>
        </section>
    )
}
function CategoryLink({movie}) {
    const navigate = useNavigate()

    const returnToDetails = () => {
        navigate('/details')
    }
    return (
        <div className='category-card-movie2'>
            <ul className='category-card--title'>
                <li>
                    <Link to={`/details/${movie.slug}`}>{movie.title}</Link>
                </li>
            </ul>
            <img onClick={() => returnToDetails()} className='category-card--img' src={movie.img} alt='img'/>
        </div>
    )
}
export { CategoriesPage, CategoryLink }