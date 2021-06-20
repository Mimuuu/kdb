import React from "react";
import { Post as PostType } from "../types";
import Post from "./Post";
import styles from "./Posts.module.scss";

interface Props {
  posts: PostType[];
}

function Posts({ posts }: Props) {
  if (!posts.length) return <p className={styles.empty}>This user has not posted anything yet</p>;

  return (
    <div className={styles.container}>
      {posts.map(p => <Post key={p.id} p={p} />)}
    </div>
  )
}

export default Posts;