import React from "react";
import { Comment as CommentType } from "../types";
import styles from "./Comment.module.scss";

interface Props {
  c: CommentType;
}

function Comment({ c }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{c.name}</p>
      <p>{c.body}</p>
    </div>
  );
}

export default Comment;
