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

  addCard = card => {
    axios
      .post(this.props.url + "boards/" + this.props.boardName, card)
      .then(response => {
        const updatedData = this.state.cards;
        updatedData.push(response.data);
        this.setState({
          cards: updatedData,
          error: ""
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  deleteCard = cardId => {
    axios
      .delete(this.props.url + "cards/" + cardId)
      .then(response => {
        const allCards = this.state.cards.filter(({ card }) => {
          return card.id !== cardId;
        });

        this.setState({
          cards: allCards
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  componentDidMount() {
    axios
      .get(this.props.url + "boards/" + this.props.boardName)
      .then(response => {
        this.setState({
          cards: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "there was an error"
        });
      });
  }

  render() {
    const allCards = this.state.cards.map((data, i) => {
      return (
        <div>
          <div className="validation-errors-display">{this.state.errors}</div>
          <Card key={i} {...data.card} deleteCardCallback={this.deleteCard} />
        </div>
      );
    });

    return (
      <div className="board">
        {allCards}
        <NewCardForm addCardCallback={this.addCard} />
      </div>
    );
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
