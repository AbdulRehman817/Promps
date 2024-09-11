import React from "react";

const SingleCard = (props) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl flex justify-center">
        <figure>
          <img src={props.src} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.title}
            <div className="badge badge-secondary"></div>
          </h2>
          <p>Price:{props.price}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">{props.description}</div>
            <div className="card-actions">
              <button className="btn btn-primary mb-5">Place order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
