import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BookList from "./BookList";
import Fantasy from "../books/fantasy.json";
import CommentArea from "./CommentArea";

// Componente genitore che gestisce SIA BookList SIA CommentArea
class GridAndComments extends Component {
  state = {
    selectedBookId: null,
  };

  handleBookSelection = (bookId) => {
    this.setState({ selectedBookId: bookId });
  };

  render() {
    return (
      <>
        {/* Griglia dei libri*/}
        <Row className="justify-content-md-center p-auto">
          <BookList books={Fantasy} onBookSelect={this.handleBookSelection} />

          {/* CommentArea con l'ID del libro selezionato come prop */}
          <CommentArea bookId={this.state.selectedBookId} />
        </Row>
      </>
    );
  }
}

export default GridAndComments;
