import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

function Product() {
  const { id } = useParams(),
    url = `https://5f50e09c5e984800161231d1.mockapi.io/api/v1/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = <p>There was an error, please refresh or try again.</p>;
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-6">
            <Card className="p-2">
              <CardTitle className="text-2xl font-bold mb-3">
                {product.data.name}
              </CardTitle>
              <CardImg src={product.data.images} alt={product.data.name} />
              <CardText className="font-bold text-xl mb-3">
                ${product.data.price}
              </CardText>
              <CardText>{product.data.description}</CardText>
            </Card>
          </div>
          <div className="col-12 col-md-3"></div>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
