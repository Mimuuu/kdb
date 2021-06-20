import React from "react";
import { useParams } from "react-router";
import { User } from "../features/users/types";
import styles from "./UserPage.module.scss";
import Spinner from "../features/_elements/Spinner";
import { get } from "../app/utils/http";

interface RouteProps {
  userId: string;
}

function UserPage() {
  const { userId } = useParams<RouteProps>();
  
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [posts, setPosts] = React.useState<User | undefined>(undefined);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    async function loadUser() {
      const r = await get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if (!error && r.error) return setError("failed to get the user");
      // the api returns {} when returning 404
      // should probably have api methods that return either result or correct error outside
      // of here, will do at the end if there is time
      if (!error && !r.id) return setError("user does not exist");

      setUser(r);
    }

    async function loadPosts() {
      const r = await get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      if (!error && r.error) return setError("Failed to get the users list");
      setPosts(r);
    }

    if (!error) {
      loadUser();
      loadPosts();
    }
  }, [userId, error]);

  if (error) return <p className={styles.error}>{error}</p>

  if (!user || !posts) return <Spinner className={styles.spinner} />;

  return (
    <div className={styles.container}>
      <h3>{user.username}'s posts</h3>
      
      <div className={styles.posts}>
        {/* <Posts posts={posts} /> */}
      </div>
    </div>
  );
}

export default UserPage;
