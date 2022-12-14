import './orders.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
// import Table from '../../components/table/Table';
import OrdersTable from '../../components/ordersTable/OrdersTable';

const orders = () => {
  return (
    <div className='orders'>
      <Sidebar />
      <div className='orderContainer'>
        <Navbar />
        <div className='ordersTable'>
          {/* <Table /> */}
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default orders;
