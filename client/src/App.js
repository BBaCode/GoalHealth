import { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import GoalPage from "./components/GoalPage/GoalPage";
import LandingPage from "./components/LandingPage/LandingPage";
import JournalPage from "./components/JournalPage/JournalPage";
import GratitudePage from "./components/GratitudePage/GratitudePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gratitudes" component={GratitudePage} />
          <Route path="/goals" component={GoalPage} />
          <Route path="/journal" component={JournalPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
