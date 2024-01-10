import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/' className='hover:underline text-white text-4xl font-bold cursor-pointer'>
        CINEMIFY.
      </Link>
      <Link to='/home' className='hover:underline text-white text-xl font-bold cursor-pointer'>
        DISCOVER
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account' className='hover:underline text-white cursor-pointer pr-4'>
            DASHBOARD
          </Link>
          <span
            onClick={handleLogout}
            className='hover:underline text-white cursor-pointer'
          >
            LOGOUT
          </span>
        </div>
      ) : (
        <div className='mx-2'>
          <Link to='/login' className='hover:underline text-white cursor-pointer'>
            SIGN IN
          </Link>
          <Link to='/signup' className='hover:underline text-white ml-2 cursor-pointer'>
            SIGN UP
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logOut } = UserAuth();
//   const navigate = useNavigate();
//   // console.log(user)

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
//       <Link to='/'>
//         <h1 className='text-white text-4xl font-bold cursor-pointer'>Cinemify.</h1>
//       </Link>
//       <Link to='/home'>
//             <h1 className='text-white text-xl font-bold cursor-pointer'>Discover</h1>
//         </Link>
//       {user?.email ? (
//         <div>
//           <Link to='/account'>
//             <button className='text-white pr-4'>Dashboard</button>
//           </Link>
//           <button
//             onClick={handleLogout}
//             className='bg-yellow-500 px-6 py-2 rounded cursor-pointer text-white'
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div className='mx-2'>
//           <Link to='/login'>
//             <button className='bg-white px-6 py-2 rounded cursor-pointer text-black'>Sign In</button>
//           </Link>
//           <Link to='/signup'>
//             <button className='bg-white px-6 py-2 rounded cursor-pointer text-black ml-2'>
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;