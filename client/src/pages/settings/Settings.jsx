import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-pp">
            <img
              src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <label htmlFor="fileInput">
              <i className="settings-pp-icon fa-solid fa-circle-user"></i>
            </label>
            <input 
              type='file' 
              id='fileInput' 
              style={{display:'none'}} 
              
            />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Kali' />
          <label>Email</label>
          <input type='email' placeholder='kali@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
