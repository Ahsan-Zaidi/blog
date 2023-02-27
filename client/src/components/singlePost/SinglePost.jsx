import './singlepost.css';
import postImg from '../../assets/img/Postimg.jpg';

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePost-wrapper">
            <img 
                src={postImg} 
                alt="" 
                className="singlePost-Img" 
            />
            <h1 className="singlePost-title">
                Lorem ipsum dolor sit amet
                <div className="singlePost-edit">
                    <i className="singlePost-icon fa-regular fa-pen-to-square"></i>
                    <i className="singlePost-icon fa-solid fa-delete-left"></i>
                </div>
            </h1>
            <div className="singlePost-info">
                <span className='singlePost-author'>Author: <b>Ahsan</b></span>
                <span className='singlePost-date'>1 hour ago</span>
            </div>
            <p className='singlePost-description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore et doloribus ullam quod, eaque dolores, possimus sequi ducimus, est omnis asperiores hic incidunt. Animi, eveniet ad. Non, illo assumenda.
            </p>
        </div>
    </div>
  )
}
