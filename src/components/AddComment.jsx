import { Component } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
    },
  };

  handleSumbimt = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",

          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("Recensione inviata!");
        this.props.addComment(this.state.comment);
        this.setState({
          comment: {
            comment: "",
            rate: "1",
            elementId: this.props.id,
          },
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  handleValue(propertyName, propertyValue) {
    this.setState({ comment: { ...this.state.review, [propertyName]: propertyValue } });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSumbimt}>
          <FormGroup className="mb-2">
            <Form.Label>Add your review</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write something..."
              value={this.state.comment.comment}
              onChange={(event) => this.handleValue("comment", event.target.value)}
              required
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
            Add Comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
