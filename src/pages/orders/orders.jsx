import './orders.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Table from '../../components/table/Table';

const orders = () => {
  return (
    <div className='orders'>
      <Sidebar />
      <div className='orderContainer'>
        <Navbar />
        <div className='ordersTable'>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default orders;
