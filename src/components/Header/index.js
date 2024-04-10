
import {Link} from 'react-router-dom'
import './index.css'

const Header=()=>(
    <>
            <nav className='header-container'>
            <Link className='link-item' to='/'>
            <div className='icon-container'>
                <img src='https://www.highreshdwallpapers.com/wp-content/uploads/2014/03/The-Movies-Wallpaper.jpg' className='movie-icon' alt='icon'/>
                <h1 className='heading'>MovieDb</h1>
            </div>
            </Link>
            <div className='topRated-search-container'>
                <Link className='link' to='/'>
                <p className='page-name'>Popular</p>
                </Link>
                <Link className='link' to='/top-rated'>
                <p className='page-name'>Top Rated</p>
                </Link>
                <Link className='link' to='/upcoming'>
                <p className='page-name'>Upcoming</p>
                </Link>
                <Link to='/search-results'>
                    <button type='button' className='searchBtn' >Search for a movie..</button>
                </Link>
            </div>
        </nav>
        
        </>
        

)
export default Header