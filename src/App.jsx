import React from "react";
import Button from "./button";
import Card from "./card";
import Navbar from "./navbar";

const App = () => {
  return (
    <div className="mt-5">
      <Navbar />
      <div className="flex items-center gap-4 flex-wrap mt-[110px]">
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          description="Best Shoes"
        />
        <Card
          className="h-5"
          src="https://onedegree.com.pk/cdn/shop/files/Running.png?v=1722237951&width=3840"
          description="Best Shoes"
        />
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          description="Best Shoes"
        />
        <Card
          src="https://onedegree.com.pk/cdn/shop/files/Running.png?v=1722237951&width=3840"
          description="Best Shoes"
        />
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          description="Best Shoes"
        />
        <Card
          src="https://onedegree.com.pk/cdn/shop/files/Running.png?v=1722237951&width=3840"
          description="Best Shoes"
        />
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          description="Best Shoes"
        />
        <Card
          src="https://onedegree.com.pk/cdn/shop/files/Running.png?v=1722237951&width=3840"
          description="Best Shoes"
        />
        <Card
          src="https://onedegree.com.pk/cdn/shop/files/Running.png?v=1722237951&width=3840"
          description="Best Shoes"
        />
      </div>
    </div>
  );
};

export default App;
