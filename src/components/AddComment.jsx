import { Component } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

class AddComment extends Component {
  // Definisco, in ordine:
  //   STATO
  //   FUNZIONI (in questo caso LA POST che contiene
  //     prevent default (che refresha la pagina)
  //     try response await fetch comments + method POST
  //     body json stringify
  //     headers + authorization per il token)
  //     if response ok
  //     else mandami errori
  //     catch degli errori
  //   RENDER-> return di quello che vedo in pagina, ossia il FORM
  //   con 3 INPUT: uno per email, uno per il commento, uno per le stelline
  state = {
    comment: {
      comment: "", // testo del commento
      rate: 1, // stelline
      elementId: this.props.asin, // asin del libro
    },
  };

  // Definisco lo stato come un oggetto contenente tre chiavi-valore: comment come stringa vuota, la stellina 1 e elementId che è l'asin del libro
  yourComment = async (e, asin) => {
    e.preventDefault(); // prevenuto il default procediamo con il collegamento all'API
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + asin, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        // = prendiamo il testo del commento dall'OGGETTO di STATO del componente, lo CONVERTIAMO in una stringa JSON e lo utilizziamo come corpo della richiesta POST all'API
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
        },
      });
      if (response.ok) {
        alert("Rewiew sent!");
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
          },
        });
      } else {
        throw new Error("Something went wrong:" + Error.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.yourComment}>
          <FormGroup className="mb-2">
            <Form.Label>Add your review</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write something..."
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </FormGroup>

          <FormGroup className="mb-2">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </FormGroup>
          <Button variant="primary" type="submit">
            Send Comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
