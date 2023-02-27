import { Link } from 'react-router-dom';
import './post.css';
import postImg from '../../assets/img/Postimg.jpg';

export default function Post() {
  return (
    <div className='post'>
        <img
            className='postImg' 
            src={postImg} 
            alt='' 
        />
        <div className="post-info">
            <div className="post-categories">
                <span className='post-category'>
                    <Link className='link' to='/posts?category=Plot'>
                        Plot
                    </Link>
                </span>
                <span className='post-category'>
                    <Link className='link' to='/posts?category=Soundtrack'>
                        Soundtrack
                    </Link>
                </span>
            </div>
            <span className="post-title">
                <Link to='/post/abc' className='link'>
                    Lorem, ipsum dolor sit amet
                </Link>
            </span>
            <hr/>
            <span className="post-date">1 hour ago</span>
        </div>
        <p className='post-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatem deserunt dolorum temporibus enim at ullam magnam fugiat quas earum sapiente laudantium perferendis, vel ducimus possimus doloremque ad vitae aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatem deserunt dolorum temporibus enim at ullam magnam fugiat quas earum sapiente laudantium perferendis, vel ducimus possimus doloremque ad vitae aspernatur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatem deserunt dolorum temporibus enim at ullam magnam fugiat quas earum sapiente laudantium perferendis, vel ducimus possimus doloremque ad vitae aspernatur.
        </p>
    </div>
  )
}
