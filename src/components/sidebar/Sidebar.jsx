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
                <li className="sidebar-list-item">Plot</li>
                <li className="sidebar-list-item">Soundtrack</li>
                <li className="sidebar-list-item">Style</li>
                <li className="sidebar-list-item">Characters</li>
                <li className="sidebar-list-item">Fights</li>
                <li className="sidebar-list-item">Theme</li>
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
