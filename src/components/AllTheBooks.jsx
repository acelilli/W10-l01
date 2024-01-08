import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import BookList from "./BookList";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="justify-content-md-center p-auto">
        {/* book ==> prop per SingleBook */}
        {/* key ==> attributo di React che serve a tracciare gli elementi quando vengono generati dinamicamente da map. Key identifica in maniera UNIVOCA*/}
        {/* Row divise per generi: FANTASY */}
        {/* <BookList books={Fantasy} /> */}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
