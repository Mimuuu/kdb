import React from "react";
import { Post } from "../types";
import styles from "./Posts.module.scss";

interface Props {
  posts: Post[];
}

function Posts({ posts }: Props) {
  if (!posts.length) return <p className={styles.empty}>This user has not posted anything yet</p>;

  return (
    <div className={styles.container}>
      {/* {posts.map(p => <Post key={p.id} p={p} />)} */}
      {posts.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  )
}

export default Posts;