import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      errors: '',
    };
  }

  componentDidMount () {
    axios.get(`${this.props.url}boards/${this.props.boardName}/cards`)
      .then((response) => {
        const cards = response.data.map((card) => {
          return <Card 
            key={ card.card.id } 
            id={ card.card.id } 
            text={ card.card.text } 
            emoji={ card.card.emoji } 
            deleteCardCallback={ this.deleteCard }
          />;
        });
        
        // console.log(cards.findIndex((card) => {return card.key === "2532"}));
        this.setState({ cards: cards });
      })
      .catch((error) => {
        this.setState({ errors: error.message });
      });
  }

  deleteCard = (id) => {
    console.log(`delete ${id}`);
    
    axios.delete(`${this.props.url}cards/${id}`)
      .then((response) => {
        const cards = this.state.cards.filter((card) => card.key !== `${id}`);

        this.setState({
          cards,
        });
      })
      .catch((error) => {
        this.setState({ errors: error.message });
      });
  }

  render() {
    return (
      // TIFF You still need to figure out what to do with this
      <div>
        { this.state.errors !== '' ? 
        <div className="validation-errors-display validation-errors-display__list">{ this.state.errors }</div>
        : 
        <div className="board">{ this.state.cards }</div> }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
