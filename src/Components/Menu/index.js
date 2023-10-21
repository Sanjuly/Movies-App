import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li> 
                        <NavLink
                            key={route.to}
                            to={route.to}
                            style={({isActive}) => ({
                            color: isActive ? 'red' : 'blue',})}>
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
routes.push({
    to: '/trends',
    text: 'Trends'
})

export { Menu }