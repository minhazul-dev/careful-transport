import "./App.css";
import Header from "./components/Header/Header";
import Vehicles from "./components/Vehicles/Vehicles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Login from "./components/Login/Login";
import "./App.css";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Vehicles} />
          <Route path="/home">
            <Vehicles></Vehicles>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination></Destination>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
