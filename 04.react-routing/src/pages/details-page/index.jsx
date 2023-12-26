import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css"

const Details = () => {
 
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div id="product-details">
      <div className="container">
        <div className="product-details">Details Page</div>
        <button
        
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Details;