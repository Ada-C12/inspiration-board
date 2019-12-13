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
    };
  }

  componentDidMount = () => {
    const { url, boardName } = this.props
    const cardsUrl = `${url}${boardName}/cards`
    
    axios.get(cardsUrl).then(response =>
      this.setState({cards: response.data})).catch(error =>
        console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.cards.map(({card}) => <Card key={card.id} {...card}/>)}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
