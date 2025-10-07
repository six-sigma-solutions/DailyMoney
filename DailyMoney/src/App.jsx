import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CoreTeam from "./components/coreTeam/CoreTeam";
import Wealth from "./components/wealth/wealth";
import Health from "./components/health/Health";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/core-team" component={CoreTeam} />
        <Route exact path="/wealth" component={Wealth} />
        <Route exact path="/health" component={Health} />
      </Switch>
    </>
  );
}
