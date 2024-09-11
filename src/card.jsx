import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const getSingle = (item) => {
    console.log("hello");
    console.log(item);
    navigate(`/singleproduct/${props.id}`);
  };
  return (
    <>
      <div className="card bg-base-100  shadow-xl w-96">
        <figure className="px-10 pt-10">
          <img src={props.src} alt="Shoes" className="rounded-xl w-96 h-96" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}!</h2>
          <p>{props.description}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => getSingle(props.id)}
            >
              More detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
