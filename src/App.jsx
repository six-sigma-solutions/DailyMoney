import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CoreTeam from "./components/coreTeam/CoreTeam";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/core-team" component={CoreTeam} />
      </Switch>
    </>
  );
}
