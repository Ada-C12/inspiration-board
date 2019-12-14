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
    axios.get(`${ this.props.url }boards/${ this.props.boardName }/cards`)
      .then((response) => {   
        this.setState({ 
          cards: response.data.reverse(),
          errors: '',
        });
      })
      .catch((error) => {
        this.setState({ errors: error.message });
      });
  }

  deleteCard = (id) => {
    console.log(`delete ${ id }`);
    
    axios.delete(`${ this.props.url }cards/${ id }`)
      .then((response) => {
        console.log(this.state.cards);
        const cards = this.state.cards.filter((element) => element.card.id !== response.data.card.id);

        this.setState({
          cards,
          errors: '',
        });
      })
      .catch((error) => {
        this.setState({ errors: error.message });
      });
  }

  addCard = (formData) => {
    console.log("add", formData);

    axios.post(`${ this.props.url }boards/${ this.props.boardName }/cards`, formData)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data);

        this.setState({ 
          cards: updatedData,
          errors: '', 
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const mappedCards = this.state.cards.map((card) => {
      return <Card 
        key={ card.card.id } 
        id={ card.card.id } 
        text={ card.card.text } 
        emoji={ card.card.emoji } 
        deleteCardCallback={ this.deleteCard }
      />;
    });

    return (
      <div>
        { this.state.errors !== '' ? 
        <div className="validation-errors-display validation-errors-display__list">{ this.state.errors }</div>
        : 
        <div className="board">{ mappedCards }</div> }

        <NewCardForm addCardCallback={ this.addCard } />
      </div>
    )
  }
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
