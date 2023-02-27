import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
    const user = false;

    return (
    <div className='nav'>
        <div className="nav-left">
            <i className="nav-icon fa-brands fa-square-facebook"></i>
            <i className="nav-icon fa-brands fa-square-twitter"></i>
            <i className="nav-icon fa-brands fa-square-pinterest"></i>
            <i className="nav-icon fa-brands fa-square-instagram"></i>
        </div>
        <div className="nav-center">
            <ul className="nav-list">
                <li className='nav-list-item'>
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='link' to='/'>CONTACT</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className='nav-list-item'>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="nav-right">
            {
                user ? (
                    <img
                        className='navImg' 
                        src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
                        alt=''
                    />
                ) : (
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                            <Link className='link' to='/login'>LOGIN</Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link className='link' to='/register'>REGISTER</Link> 
                        </li> 
                    </ul>
                )
            }
            <i className="nav-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    )
    }
