import './write.css';
import postImg from '../../assets/img/Postimg.jpg';

export default function Write() {
  return (
    <div className='write'>
      <img 
        className='write-img'
        src={postImg}
        alt='' 
      />
      <form className='write-form'>
        <div className="write-form-group">
          <label htmlFor='fileInput'>
            <i className="write-icon fa-solid fa-plus"></i>
          </label>
          <input type='file' id='fileInput' style={{display:'none'}} />
          <input type='text' placeholder='Title' className='write-input' autoFocus={true} />
        </div>
        <div className="write-form-group">
          <textarea 
            placeholder='Thoughts...' 
            type='text' 
            className='write-input write-text'
            ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  )
}
