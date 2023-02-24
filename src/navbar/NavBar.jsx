import './navbar.css';

export default function NavBar() {
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
                <li className='nav-list-item'>HOME</li>
                <li className='nav-list-item'>ABOUT</li>
                <li className='nav-list-item'>CONTACT</li>
                <li className='nav-list-item'>WRITE</li>
                <li className='nav-list-item'>LOGOUT</li>
            </ul>
        </div>
        <div className="nav-right">
            <img
                className='navImg' 
                src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
                alt=''
            />
            <i className="nav-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
