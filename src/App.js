import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  const { name } = props;
  return <div className="App">{name}</div>;
}

const stateToProps = state => {
  const { app } = state;
  return { name: app.name };
};
export default connect(stateToProps)(App);
