import React from "react";
import { Post as PostType } from "../types";
import styles from "./Post.module.scss";

interface Props {
  p: PostType;
}

function Post({ p }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{p.title}</p>
      <p className={styles.body}>{p.body}</p>
    </div>
  );
}
export default Post;