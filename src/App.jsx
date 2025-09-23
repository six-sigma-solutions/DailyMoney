import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}
