import { Link } from 'react-router-dom';
import './sidebar.css';
import aboutImg from '../../assets/img/Aboutimg.jpg';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-item">
            <span className='sidebar-title'>ABOUT ME</span>
            <img src={aboutImg} alt='' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum magni nisi quasi tenetur harum! Aspernatur quo animi libero sequi eligendi dolore fugiat voluptas facere atque nobis.
            </p>
        </div>
        <div className="sidebar-item">
            <span className='sidebar-title'>CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link className="link" to="/posts?category=Plot">
                        Plot
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="link" to="/posts?category=Soundtrack">
                        Soundtrack
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="link" to="/posts?category=Style">
                        Style
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="link" to="/posts?category=Characters">
                        Characters
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="link" to="/posts?category=Fights">
                        Fights
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="link" to="/posts?category=Theme">
                        Theme
                    </Link>
                </li>
            </ul>
        </div>
        <div className="sidebar-item">
            <span className='sidebar-title'>FOLLOW US</span>
            <div className="sidebar-social">
                <i className="sidebar-icon fa-brands fa-square-facebook"></i>
                <i className="sidebar-icon fa-brands fa-square-twitter"></i>
                <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
                <i className="sidebar-icon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
