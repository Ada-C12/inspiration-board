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

  addCard = (formData) => {
    console.log("add", formData);

    axios.post(`${this.props.url}boards/${this.props.boardName}/cards`, formData)
      .then((response) => {
        const updatedData = this.state.cards;
        
        const newCard = <Card 
          key={ response.data.card.id } 
          id={ response.data.card.id } 
          text={ response.data.card.text } 
          emoji={ response.data.card.emoji } 
          deleteCardCallback={ this.deleteCard }
        />;

        updatedData.push(newCard);

        this.setState({ cards: updatedData });
      })
      .catch((error) => {
        this.setState({ error: error.message });
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

        <NewCardForm addCardCallback={ this.addCard } />
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
