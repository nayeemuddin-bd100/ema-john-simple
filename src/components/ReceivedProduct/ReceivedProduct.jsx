import React, { useContext } from 'react';
import { userContext } from '../../App';

function ReceivedProduct() {
    const [logedInUser, setLogedInUser] = useContext(userContext)
    return (
      <div className="mt-5" style={{ width: "700px", margin: "0 auto" }}>
        <p className="display-4 lead">
          Hi, Mr {logedInUser.name} . We are waiting in front of your Home!{" "}
        </p>
        <p className="display-4 lead">
          Please Open Your Door and Received Your Product 😎
        </p>
      </div>
    );
}

export default ReceivedProduct
