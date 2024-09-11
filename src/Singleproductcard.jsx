import React from "react";

const Singleproductcard = (props) => {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={props.src} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{props.title}</h2>
            <p>Price:{props.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproductcard;
