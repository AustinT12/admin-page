import './ordersTable.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Joey Ramirez',
      date: 'March 21',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Playstation 5',
      img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Michael Doe',
      date: 'March 30',
      amount: 900,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2342353,
      product: 'Redragon S101',
      img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Johnny Rivers',
      date: 'April 3',
      amount: 35,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Roddy Jackson',
      date: 'May 4',

      amount: 920,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 3355734,
      product: 'LED Strobe Lights',
      img: 'https://m.media-amazon.com/images/I/71W3Rma3FML._AC_UL320_.jpg',
      customer: 'Harold Carol',
      date: 'June 16',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
    {
      id: 5673156,
      product: 'Razer DeathAdder v2 Mini Gaming Mouse',
      img: 'https://m.media-amazon.com/images/I/61Qmgdr5JrL._AC_SX355_.jpg',
      customer: 'Billy Williams',
      date: 'June 16',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
    {
      id: 5345632,
      product: 'Turtle Beach Stealth 700 Gen 2 MAX Multiplatform Headset',
      img: 'https://m.media-amazon.com/images/I/81bB-vG-HGL._SX342_.jpg',
      customer: 'Carol Greenfield',
      date: 'June 16',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
    {
      id: 2342355,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'James Avery',
      date: 'June 16',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
  ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>${row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                {/* this line of  code gets the class name of "status(string) + the status defined in the rows table" */}
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
