import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add new user</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              alt=''
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                {/* htmlFor connects the label to the input */}
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <div className='formInput'>
                <label>Username</label>
                <input type='text' placeholder='user_name' />
              </div>
              <div className='formInput'>
                <label>Name and Surname</label>
                <input type='text' placeholder='John Doe' />
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='email' placeholder='user@gmail.com' />
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='text' placeholder='404-678-0000' />
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='password' />
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='619 Hollywood Blvd, Allenwood, California'
                />
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder='U.S.A.' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
