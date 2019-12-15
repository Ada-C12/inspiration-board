import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARD_DATA.cards,
      url: props.url,
      boards: [],
      error: '',
    };
  }

  componentDidMount () {
    axios.get(this.state.url)
    .then((response) => {
      this.setState({ boards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  makeCollection () {
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card
      key={i}
      text={card.text}
      emoji={card.emoji || card.Emoji}/>;
    });
    return cardCollection
  }

  render() {
    return (
      <ul>
        {this.makeCollection()}
      </ul>
    )
  }
}

Board.propTypes = {

};

export default Board;
