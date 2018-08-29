import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateEmail
} from "../../ducks/reducer";
class WizardTen extends Component {
  render() {
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your name?</p> <br />
          <input
            type="text"
            placeholder="First Name"
            onChange={this.props.updateFirstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={this.props.updateLastName}
          />
          <input
            type="text"
            placeholder="email"
            onChange={this.props.updateEmail}
          />
          <Link to="/wEleven">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { fistName, lastName, email } = state;
  return {
    fistName,
    lastName,
    email
  };
}
export default connect(
  mapStateToProps,
  { updateFirstName, updateFirstName, updateEmail }
)(WizardTen);
