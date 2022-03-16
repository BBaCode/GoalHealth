import React from "react";
import "./GoalPage.scss";
import { Link } from "react-router-dom";
class GoalPage extends React.Component {
  state = {};
  render() {
    return (
      <div className="goals">
        <section className="goals__top">
          <div className="goals__header">
            <h2 className="goals__header-title">Goals Checklist</h2>
            <p className="goals__header-paragraph">
              What are you trying to accomplish today?
            </p>
          </div>
          <ul className="goals__nav">
            <Link className="goals__link" to="/">
              <li className="goals__link-item">Home</li>
            </Link>
            <Link className="goals__link" to="/gratitudes">
              <li className="goals__link-item">Gratitude</li>
            </Link>
            <Link className="goals__link" to="/journal">
              <li className="goals__link-item">Journal</li>
            </Link>
          </ul>
        </section>
        <textarea
          className="goals__textarea"
          placeholder="Write your goals here!"
        ></textarea>
      </div>
    );
  }
}

export default GoalPage;
