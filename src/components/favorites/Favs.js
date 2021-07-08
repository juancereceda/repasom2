import React from "react";
import { removeCountryFavorite } from "../../actions/actions";
import { connect } from "react-redux";

function Favs(props) {
  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
