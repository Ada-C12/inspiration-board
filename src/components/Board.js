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
    const cardsUrl = `${url}boards/${boardName}/cards`
    
    axios.get(cardsUrl).then(response =>
      this.setState({cards: response.data})).catch(error =>
        console.log('error fetching cards', error))
  }

  onDeleteCard = (id) => {
    axios.delete(`${this.props.url}cards/${id}`).then(() =>
      this.setState(state => {
        const i = state.cards.findIndex(({ card }) => card.id === id)
        const cards = [...state.cards]
        cards.splice(i, 1)
        return { cards }
      })
    ).catch(error => console.log('error deleting card', error))
  }

  render() {
    const encard = ({ card }) => {
      return <Card onDelete={this.onDeleteCard} key={card.id} {...card}/>
    };
    
    return (
      <div>
        {this.state.cards.map(encard)}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
