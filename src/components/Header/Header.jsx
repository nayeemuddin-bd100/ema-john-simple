import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
  const [logedInUser, setLogedInUser] = useContext(userContext)
 
   return (
     <div className="header">
       <img src={logo} alt="logo" />
       <nav>
         <Link style={{ textDecoration: "none" }} to="/shop">
           Shop
         </Link>
         <Link style={{ textDecoration: "none" }} to="/review">
           Order Review
         </Link>
         <Link style={{ textDecoration: "none" }} to="/inventory">
           Manage Inventory
         </Link>
         {logedInUser.email && (
           <button
             className="btn btn-danger my-2"
             onClick={() => setLogedInUser({})}
           >
             Sign Out
           </button>
         )}
       </nav>
     </div>
   );
}

export default Header
