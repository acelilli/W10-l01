import React from "react";
import SingleBook from "./SingleBook";
import { Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Col md={6}>
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} onBookSelect={this.props.onBookSelect} />
      ))}
    </Col>
  );
};

export default BookList;
