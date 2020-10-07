import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

function ProductCard(props) {
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-6">
          <Card>
            <Link to={`/products/${props.product.id}`}>
              <CardImg
                style={{ backgroundImage: `url('${props.product.images}')` }}
                className="w-full h-64 bg-blue bg-cover"
              />
            </Link>

            <CardBody>
              <CardTitle className="font-bold text-xl mb-3">
                <Link to={`/products/${props.product.id}`}>
                  {props.product.name}
                </Link>
              </CardTitle>
              <CardText className="font-bold mb-3">
                {props.product.price}
              </CardText>
              <CardText className="mb-3">{props.product.description}</CardText>
              <Link to={`/products/${props.product.id}`}>
                <Button type="submit" color="primary">
                  View
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-3"></div>
      </div>
    </div>
  );
}

export default ProductCard;

{
  /* <div>
  <Card>
    <CardImg width="100%" src={dish.image} alt={dish.name} />
    <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
    </CardBody>
  </Card>
</div>; */
}
