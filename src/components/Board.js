import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    axios
      .get(this.props.url + this.props.boardName)
      .then(response => {
        this.setState({
          cards: response.data
        });
      })
      .catch(error => {
        // TODO
        this.setState({
          error: "there was an error"
        });
      });
  }

  render() {
    console.log(this.state.cards);
    const allCards = this.state.cards.map((data, i) => {
      return <Card key={i} {...data.card} />;
    });

    return <div>{allCards}</div>;
  }
}

Board.propTypes = {};

export default Board;
