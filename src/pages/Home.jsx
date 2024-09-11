import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card";
import Navbar from "../Components/navbar";
import { Outlet, useParams } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setData(res.data); // Access the `data` property of the response
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="flex justify-center flex-wrap gap-10 mt-10">
      {data ? (
        data.map((item, index) => (
          <Card
            key={index} // Add a unique key for each item in the list src=
            src={item.image}
            title={item.title}
            description={item.category}
            price={item.price}
            id={item.id}
          ></Card>
        ))
      ) : (
        <div className="loader flex absolute w-[20%] h-[100vh] top-0 z-10">
          <span className="loading loading-ring  "></span>
        </div>
      )}
    </div>
  );
};

export default Home;
