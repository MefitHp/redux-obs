import React from "react";
import BeersList from "./BeersList";
import { connect } from "react-redux";

const Beers = props => {
  console.log(props);
  return (
    <div>
      <BeersList />
    </div>
  );
};

export default connect(state => state.beers)(Beers);
