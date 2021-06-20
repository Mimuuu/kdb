import React from "react";
import { get } from "../../../app/utils/http";
import { Post as PostType } from "../types";
import { Comment as CommentType } from "../types";
import Comment from "./Comment";
import styles from "./Post.module.scss";

interface Props {
  p: PostType;
}

function Post({ p }: Props) {
  const [comments, setComments] = React.useState<CommentType[] | undefined>(undefined);
  const [error, setError] = React.useState<string>("");
  const [showComments, setShowComments] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function loadComments() {
      const r = await get(`https://jsonplaceholder.typicode.com/posts/${p.id}/comments`)
      if (r.error) return setError("failed to load comments");
      setComments(r);
    }

    loadComments();
  }, [p.id]);

  const toggleComments = () => setShowComments(!showComments);

  const toggleAction = showComments ? "hide" : "show";

  return (
    <div className={styles.container}>
      <p className={styles.title}>{p.title}</p>
      <p className={styles.body}>{p.body}</p>

      <div className={styles.commentsContainer}>
        {error && (<p className={styles.error}>failed to load comments</p>)}
        {!comments && !error && (<p className={styles.error}>...</p>)}
        {comments && (
          <p className={styles.toggle} onClick={toggleComments}>{toggleAction} {comments.length} comments</p>
        )}


        {comments && (
        <div className={`${styles.comments} ${showComments && styles.visible}`}>
          {comments.map(c => <Comment key={c.id} c={c} />)}
        </div>
      )}
      </div>
    </div>
  );
}

export default Post;
