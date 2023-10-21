import React from 'react'

function SearchPage() {
    return (
        <form id="searchForm" className="header-searchForm">
            <input type="text" placeholder="Search" />
            <button id="searchBtn" type="button">🔍</button>
        </form>
    )
}

export { SearchPage }