import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function NotFoundPage() {
    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <h1>404 - Page Not Found</h1>
                    <p>Sorry, we couldn't find the page you were looking for.</p>
                    <Link to="/" className="btn btn-primary">Return to Home</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFoundPage;
