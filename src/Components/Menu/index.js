import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
    return (
        <nav className='nav-container'>
            <ul className='nav-container-list'>
                {routes.map(route => (
                    <li key={route.to}> 
                        <NavLink
                            to={route.to}
                            style={({isActive}) => ({
                            color: isActive ? 'yellow' : '#cb7169',})}>
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}
const routes = []
routes.push({
    to: '/',
    text: 'Home'
})
routes.push({
    to: '/trends',
    text: 'Trends'
})
routes.push({
    to: '/category',
    text: 'Category'
})
routes.push({
    to: '/details',
    text: 'Movie Details'
})
routes.push({
    to: '/search',
    text: 'Search'
})
export { Menu }