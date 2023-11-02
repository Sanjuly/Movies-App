import React from 'react'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className='search'>
            <form id='searchForm' className='search-searchForm'>
                <input type='text' placeholder='Search' />
            </form>
        </div>
    )
}

export { SearchPage }