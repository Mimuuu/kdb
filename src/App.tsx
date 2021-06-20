import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";

import style from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Link to={"/"}><h1>KdB</h1></Link>

      <Switch>
        <Route path="/" component={UsersListPage} />
        {/* <Route path="/:userId" component={UserPage} /> */}
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
