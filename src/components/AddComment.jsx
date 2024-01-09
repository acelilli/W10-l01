import { Component } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

class AddComment extends Component {
  // Stato iniziale con un oggetto commento che contiene il testo del commento e il voto predefinito a 1
  state = {
    comment: {
      commentText: "", // Testo del commento
      rate: 1, // Voto predefinito
    },
  };

  // Gestisce il cambiamento degli input del form
  handleInputChange = (e) => {
    const { name, value } = e.target;
    // Aggiorna lo stato del commento in modo dinamico utilizzando il nome dell'input come chiave
    this.setState((prevState) => ({
      comment: {
        ...prevState.comment,
        [name]: value,
      },
    }));
  };

  // Gestisce la sottomissione del form
  handleSumbimt = async (event) => {
    event.preventDefault();
    console.log("bookId:", this.props.bookId); //vediamo se bookId è giusto
    try {
      // Effettua una richiesta POST all'API dei commenti
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify({
          ...this.state.comment, // Invia i dati del commento
          elementId: this.props.bookId, // Aggiunge l'ID del libro dalla prop
        }),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84", // Token di autorizzazione
          "Content-type": "application/json", // Tipo di contenuto JSON
        },
      });

      // Se la risposta è positiva (status code 200-299)
      if (response.ok) {
        alert("Commento inviato!"); // Avviso all'utente
        const newComment = await response.json(); // Estrae il nuovo commento dalla risposta
        this.props.onCommentAdded(newComment); // Chiama la callback fornita come prop
        this.setState({
          comment: {
            commentText: "", // Resetta il testo del commento a una stringa vuota
            rate: 1, // Resetta il voto a 1
          },
        });
      }
    } catch (error) {
      alert(error.message); // Avviso l'utente dell'errore
      console.error("Errore durante la pubblicazione", error); // Log dell'errore nella console
    }
  };

  // Renderizza il componente
  render() {
    return (
      <>
        {/* Form per l'aggiunta di commenti, con event listener per la sottomissione */}
        <Form onSubmit={this.handleSumbimt}>
          {/* Gruppo di form per il testo del commento */}
          <FormGroup className="mb-2">
            <Form.Label>Aggiungi la tua recensione</Form.Label>
            {/* Input di testo per il commento con valore e evento di cambio collegati allo stato */}
            <Form.Control
              type="text"
              placeholder="Scrivi qualcosa..."
              value={this.state.comment.commentText}
              onChange={this.handleInputChange}
              name="commentText" // Nome dell'input
              required
            />
          </FormGroup>

          {/* Gruppo di form per il voto */}
          <FormGroup className="mb-2">
            <Form.Label>Voto</Form.Label>
            {/* Dropdown per la selezione del voto con valore e evento di cambio collegati allo stato */}
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={this.handleInputChange}
              name="rate" // Nome dell'input
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </FormGroup>
          {/* Pulsante di invio del commento */}
          <Button variant="primary" type="submit">
            Aggiungi Commento
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
