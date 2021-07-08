import React from "react";
import { connect } from "react-redux";
import { getCountries, addCountryFavorite } from "../../actions/actions";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
