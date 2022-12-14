import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
const orders = () => {
  return (
    <div className='order'>
      <Sidebar />
      <div className='orderContainer'>
        <Navbar />
      </div>
    </div>
  );
};

export default orders;
