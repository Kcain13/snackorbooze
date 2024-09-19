import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  // Find the item by id, regardless of whether it's a snack or drink
  const item = items.find(item => item.id === id);

  // If item not found, redirect to the "not found" route
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          {item.recipe && (
            <p>
              <b>Recipe:</b> {item.recipe}
            </p>
          )}
          {item.serve && (
            <p>
              <b>Serve:</b> {item.serve}
            </p>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
