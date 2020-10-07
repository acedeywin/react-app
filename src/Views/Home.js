import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
  // https://mockapi.io/projects/5f50e09c5e984800161231d2
  const url = `https://5f50e09c5e984800161231d1.mockapi.io/api/v1/products/?page=1&limit=20`;

  let products = useAxiosGet(url);
  let content = null;

  if (products.error) {
    content = <p>There was an error, please refresh or try again.</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Best Sellers</h1>
      <br />
      {content}
    </div>
  );
}

export default Home;
