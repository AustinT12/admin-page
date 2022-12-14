export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'James West',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: 'westjames@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Joey Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jlannister@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Cameron Andrews',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'adrew@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Tony Stark',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'tonystark@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Gary Thompson',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'garyt@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Melanie Stephenson',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'melsteph@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'Andrew Cliffs',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'drewcliffs@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Paige Wright',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'itspaige@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Michelle Ramirez',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'mirmrz@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Landon Cube',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'cubelandon@gmail.com',
    status: 'active',
    age: 65,
  },
];
