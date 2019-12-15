import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: '',
    };
  }

  componentDidMount() {
    const url = `${this.props.url}/${this.props.boardName}/cards`;
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.setState({cards: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      });
  }

  render() {
    console.log(this.state.cards)
    const makeCards = (cards) => {
      return cards.map ((card, i) => {
        return <Card
          key={i}
          text={card["card"]["text"]}
          emoji={card["card"]["emoji"]}
        />
      });
    }

    return (
      <div className="board">
        {this.state.error ? <p>Error loading cards: {this.state.error}</p> : ""}
        {makeCards(this.state.cards)}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
