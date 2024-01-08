import React from "react";
import SingleBook from "./SingleBook";
import { Col } from "react-bootstrap";

const BookList = ({ books, onBookSelect }) => {
  return (
    <Col md={8}>
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} onBookSelect={onBookSelect} />
      ))}
    </Col>
  );
};

export default BookList;
