import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <header>
          <h1 className={styles.title}>
            <Link to={"/"}>KdB</Link>
          </h1>
        </header>

        <Switch>
          <Route path="/" component={UsersListPage} exact />
          <Route path="/:userId" component={UserPage} exact/>

          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
