import React from 'react'
import { Link } from 'react-router-dom'
import { categorydata } from './categorydata'

function CategoriesPage() {
    return (
        <section>
            <h1>Categories</h1>
            {categorydata.map(movie => (
                <CategoryLink  key={movie.slug} movie={movie} />
                
            ))}
        {/*<article className="categories-list">
            <div className="category-container">
                <h3 id="id28" class="category-title">Romance</h3>
            </div>
            <div className="category-container">
                <h3 id="id16" class="category-title">Drama</h3>
            </div>
            <div className="category-container">
                <h3 id="id14" className="category-title">Action</h3>
            </div>
            </article>*/}

    </section>
    )
}

function CategoryLink({movie}) {
    return (
        <li>
            <Link to={`/details/${movie.slug}`}>{movie.title}</Link>
        </li>

    )
}
export { CategoriesPage, CategoryLink }