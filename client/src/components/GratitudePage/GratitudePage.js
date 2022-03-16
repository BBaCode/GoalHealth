import { Component } from "react";

import "./GratitudePage.scss";
import { Link } from "react-router-dom";

class GratitudePage extends Component {
  state = {
    goalsArray: [],
  };

  submitGoal = (event) => {
    event.preventDefault();
    this.state.goalsArray.push(event.target.textarea.value);
    console.log(this.state.goalsArray);
  };

  makeList = () => {
    this.state.goalsArray.map((goal) => {
      return <li>{goal}</li>;
    });
  };

  render() {
    return (
      <div className="gratitude">
        <section className="gratitude__header-box">
          <h1 className="gratitude__header-title">
            What am I grateful for today?
          </h1>
          <form
            className="gratitude__header-wrapper"
            onSubmit={this.submitGoal}
          >
            <textarea name="textarea" className="input"></textarea>
            <button className="gratitude__header-button">Submit</button>
          </form>
        </section>
        <section className="gratitude__list-box">
          <ul>
            <li>A wonderful home</li>
            <li>A brand new day, filled with new possibilities</li>
            <li>Ernie</li>
          </ul>
        </section>
        <Link to="/goals">
          <button className="gratitude__nextButton">Next</button>
        </Link>
      </div>
    );
  }
}

export default GratitudePage;
