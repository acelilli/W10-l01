import React from "react";
import CommentItself from "./CommentItself";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <ListGroup.Item key={comment._id}>
        <CommentItself comment={comment} />
      </ListGroup.Item>
    ))}
  </>
);

export default CommentList;
