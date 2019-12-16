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
    const url = `${this.props.url}${this.props.boardName}/cards`;
    axios.get(url)
      .then((response) => {
        this.setState({cards: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      });
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        const cards = this.state.cards.filter((card) => card["card"]["id"] !== id);

        this.setState({cards,});
      })
      .catch((error) => {
        this.setState({error: error.message});
      });
  }

  addCard = (card) => {
    const url = `${this.props.url}${this.props.boardName}/cards`
    axios.post(url, card)
    .then((response) => {
      const updatedCards = this.state.cards;
      updatedCards.push(response.data);
      this.setState({
        cards: updatedCards,
        error: ''
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    })
  }

  render() {
    const makeCards = (cards) => {
      return cards.map ((card, i) => {
        return <Card
          key={i}
          id={card["card"]["id"]}
          text={card["card"]["text"]}
          emoji={card["card"]["emoji"]}
          deleteCardCallback={this.deleteCard}
        />
      });
    }

    return (
      <div className="board">
        {this.state.error ? <p className="validation-errors-display">Error occurred: {this.state.error}</p> : ""}
        <NewCardForm addCardCallback={this.addCard}/>
        {this.state.cards.length > 0 ? makeCards(this.state.cards) : ""}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
