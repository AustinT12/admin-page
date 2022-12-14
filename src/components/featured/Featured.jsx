import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className='title'>Total sales made today:</p>
        <p className='amount'>$420</p>
        <p className='description'>
          Today our total revenue clocks in at $420.00. Therefore, we are 70%
          towards reaching our goal for today!
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Today</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>$12k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last week</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='resultAmount'>$5k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='resultAmount'>$14k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
