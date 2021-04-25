// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import CreateNewUser from "./components/CreateNewUser";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/user/:id">
          <UserDetails />
        </Route>
        <Route path="/create-new-user">
          <CreateNewUser />
        </Route>
        <Route path="/">
          <UsersList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
