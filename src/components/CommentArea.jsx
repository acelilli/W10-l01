import React, { Component } from "react";
import { ListGroup, Col } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  /* Inizializzazione  STATO INIZIALE
in cui l'array di comments è vuoto,
loading è un boolean 
e error è null */
  state = {
    comments: [],
    loading: false,
    error: null,
  };
  /* QUI SI FA LA FETCH
  ossia, una volta che il DOM ha caricato i suoi componenti viene fatta la fetch (per questo è ASINCRONA).
  Lo stato viene cambiato su TRUE
  */
  componentDidMount = async () => {
    const { bookId } = this.props;

    if (!bookId) {
      // Se non c'è un libro selezionato, esce dalla funzione
      return;
    }
    this.setState({ loading: true, error: null });
    {
      /*FETCH VERA E PROPRIA CHE PARTE DA QUI. In cui:
       vengono collegati i commenti relativi ad un libro specifico ( ${this.props.bookId} )
      SE vengono trovati vengono caricati, altrimenti stampa un messaggio di errore */
    }
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data:", data);
        this.setState({ comments: data, loading: false });
      } else {
        console.log("Error loading comments");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
      this.setState({ error, loading: false });
    }
  };

  // RENDERIZZIAMO GLI ELEMENTI
  /*  */
  render() {
    const { loading, error, comments } = this.state;

    return (
      <Col md={6}>
        <div>
          {error && <p>Error fetching data: {error.message}</p>}
          {/* SE loading è true, viene visualizzato un messaggio di caricamento. 
        SE error è presente, viene visualizzato un messaggio di errore. */}

          {loading ? (
            <p>Loading...</p>
          ) : comments.length > 0 ? (
            <div style={{ height: "200px", marginTop: "1rem", overflowY: "scroll" }}>
              <ListGroup variant="flush" style={{}}>
                <CommentList comments={comments} />
              </ListGroup>
              <AddComment id={this.props.id} />
            </div>
          ) : (
            <p>No comments available</p>
          )}
          {/* SE ci sono commenti, viene mostrato un elenco (ListGroup) di commenti utilizzando il componente CommentList. ALTRIMENTI, viene mostrato un messaggio che indica l'assenza di recensioni. */}

          {/* FINE COMMENT AREA */}
        </div>
      </Col>
    );
  }
}

export default CommentArea;
