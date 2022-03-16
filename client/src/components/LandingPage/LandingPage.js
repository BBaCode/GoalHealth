import { Component } from "react";
import axios from "axios";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {
    aspirationalQuote: "",
    author: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/quotes")
      .then((response) => {
        console.log(response);
        this.setState({
          aspirationalQuote: response.data.text,
          author: response.data.author,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <section className="landing">
        <h1 className="landing__header">Quote of the Day</h1>
        <h2 className="landing__quote">{this.state.aspirationalQuote}</h2>
        <h3 className="landing__author">{this.state.author || "Ernie"} </h3>
        <Link to="/gratitudes">
          <button className="landing__button">Start your day!</button>
        </Link>
      </section>
    );
  }
}

export default LandingPage;
