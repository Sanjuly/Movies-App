import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './Components/HomePage'
import { CategoriesPage } from './Components/CategoriesPage'
import { MovieDetailsPage } from './Components/MovieDetailsPage'
import { SearchPage } from './Components/SearchPage'
import { TrendsPage } from './Components/TrendsPage'
import { NotFoundPage } from './Components/NotFoundPage'
import { Menu } from './Components/Menu'
import { Footer } from './Components/Footer'


function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoriesPage />} />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route path="/details/:slug" element={<MovieDetailsPage/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/trends" element={<TrendsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}
export default App
