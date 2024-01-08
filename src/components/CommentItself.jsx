import React from "react";
import { Button } from "react-bootstrap";
//const CommentItself = ({ comment, onDelete }) => {
const CommentItself = ({ comment }) => {
  // da numeri a stelle
  const renderStars = (rate) => {
    return "⭐".repeat(rate);
  };

  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
        },
      });
      if (response.ok) {
        alert("Review deleted!");
      } else {
        throw new Error("Review not deleted!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <span className="d-block">{comment.author} scrive:</span>
      <span className="d-block">{renderStars(comment.rate)}</span>
      <span className="fst-italic mt-2 mb-0">"{comment.comment}"</span>
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </>
  );
};

export default CommentItself;
