import { Component } from "react";
import "./JournalPage.scss";
import { Link } from "react-router-dom";

class JournalPage extends Component {
  state = {};
  render() {
    return (
      <div className="journal">
        <section className="journal__top">
          <div className="journal__header">
            <h2 className="journal__header-title">Journal</h2>
            <p className="journal__header-paragraph">
              Looking for something? This is the place to find it!
            </p>
          </div>
          <ul className="journal__nav">
            <Link className="journal__link" to="/">
              <li className="journal__link-item">Home</li>
            </Link>
            <Link className="journal__link" to="/gratitudes">
              <li className="journal__link-item">Gratitude</li>
            </Link>
            <Link className="journal__link" to="/journal">
              <li className="journal__link-item">Journal</li>
            </Link>
          </ul>
        </section>
        <ul className="journal__list">
          <li className="journal__list-item">2/23/2022</li>
          <li className="journal__list-item">2/20/2022</li>
          <li className="journal__list-item">2/15/2022</li>
          <li className="journal__list-item">2/10/2022</li>
          <li className="journal__list-item">2/09/2022</li>
          <li className="journal__list-item">2/07/2022</li>
          <li className="journal__list-item">2/02/2022</li>
          <li className="journal__list-item">1/23/2022</li>
          <li className="journal__list-item">1/20/2022</li>
          <li className="journal__list-item">1/15/2022</li>
          <li className="journal__list-item">1/06/2022</li>
        </ul>
      </div>
    );
  }
}

export default JournalPage;
