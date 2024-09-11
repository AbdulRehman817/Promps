import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../Components/navbar";
// import Card from "../card";
import Singleproductcard from "../Singleproductcard";
const SingleProduct = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]); // Added `id` to dependency array

  return (
    <>
      <div className="flex justify-center flex-wrap">
        {data ? (
          <Singleproductcard
            className="hidden"
            // className="flex justify-between flex-wrap"
            title={data.title}
            description={data.category}
            src={data.image}
            price={data.price}
          />
        ) : (
          <div className="loader flex z-10">
            <span
              className="loading loading-dots  absolute w-[30%] h-[100vh] top-0 z-10 flex justify-center items-center 
          
            "
            ></span>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default SingleProduct;
