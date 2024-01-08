import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  // whenSelected() {
  //   this.setState({selected:true})
  //   // setto lo state whenSelected che si attiva quando è true
  // }
  // Lo rendiamo toggle
  whenSelected() {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  }
  render() {
    const { book } = this.props;
    const { selected } = this.state;

    if (selected) {
      return (
        <Col sm={12} md={6} lg={3}>
          <Card
            key={book.asin}
            style={{
              height: "800px",
              width: "270px",
              margin: "auto",
              marginBottom: "1rem",
              border: "2px solid red",
            }}
          >
            <Card.Img
              variant="top"
              src={book.img}
              alt="Book Cover"
              className="img-contain"
              style={{
                height: "22rem",
                border: "2px solid grainsboro",
              }}
            />
            <Card.Body>
              <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {book.title}
              </Card.Title>
              <Card.Text>- {book.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  this.whenSelected();
                  this.props.onBookSelect(book.asin);
                }}
              >
                Select
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    } else {
      return (
        <Col sm={12} md={6} lg={3}>
          <Card
            key={book.asin}
            style={{
              height: "500px",
              width: "270px",
              margin: "auto",
              marginBottom: "1rem",
              border: "2px solid rgba(0, 0, 0, 0.175)",
            }}
          >
            <Card.Img
              variant="top"
              src={book.img}
              alt="Book Cover"
              className="img-contain"
              style={{
                height: "22rem",
                border: "2px solid grainsboro",
              }}
            />
            <Card.Body>
              <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {book.title}
              </Card.Title>
              <Card.Text>- {book.price}</Card.Text>
              <Button variant="primary" onClick={() => this.setState({ selected: !this.state.selected })}>
                Select
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    }
  }
}

export default SingleBook;

// Quando era una funzione:
// class SingleBook extends Component {
//   render() {
//     const { book } = this.props;

//     return (
//       <Col sm={12} md={6} lg={3}>
//         <Card key={book.asin} style={{ height: "500px", width: "270px", margin: "auto", marginBottom: "1rem" }}>
//           <Card.Img
//             variant="top"
//             src={book.img}
//             alt="Book Cover"
//             className="img-contain"
//             style={{ height: "70%" }}
//           />
//           <Card.Body>
//             <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
//               {book.title}
//             </Card.Title>
//             <Card.Text>
//               <p>- {book.price}</p>
//             </Card.Text>
//             <Button variant="primary">Add To cart</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   }
// }

// export default SingleBook;
