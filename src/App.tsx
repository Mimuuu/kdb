import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";

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
          <Route path="/" component={UsersListPage} />
          {/* <Route path="/:userId" component={UserPage} /> */}
        </Switch>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
