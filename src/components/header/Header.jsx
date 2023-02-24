import './header.css';
import HeroBanner from '../../assets/img/Herobanner.jpg';

export default function Header() {
  return (
    <div className='header'>
        <div className="header-titles">
            <span className='header-title-sm'>Anime & Manga</span>
            <span className='header-title-lg'>BLOG</span>
        </div>
        <img className='headerImg' src={HeroBanner} alt='' />
    </div>
  )
}
