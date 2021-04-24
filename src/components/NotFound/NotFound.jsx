import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h3 className="lead display-3">Sorry page Not Found!</h3>
      <br />
      <Link className="btn btn-info" to="/shop">
        Back To Home Page
      </Link>
    </div>
  );
}

export default NotFound;
