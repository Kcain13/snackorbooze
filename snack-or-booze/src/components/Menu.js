import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
//introudce  `items` an array of objects representing either snacks or drinks
// `title` a string representing either food or drink
// `category ` a string used to construct the correct link paths for each item
function Menu({ items, title, category }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Explore our selection of {title.toLowerCase()} items. Click on an item to learn more!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${category}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
