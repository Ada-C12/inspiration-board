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
      cards: [],
      error: ''
    };
  }
  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  
  addCard = (card) => {
    
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
   .then((response => {
    const updatedData = this.state.cards 
    updatedData.push(response.data)
    this.setState({
      cards: updatedData,
      error: ''
    })
   }))
   .catch((error) => {
     this.setState({error: error.message})
   })

  }
  deleteCard = (cardId) => {
   
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    .then((response) => {
      const updatedCards = this.state.cards.filter((card) => card.card.id !== cardId)
    
      this.setState({
        cards: updatedCards,
        error: ''
      })

    })
    .catch((error) => {
      this.setState({error: error.message})
    })
  
  }
  render() {
    const cardComponents = this.state.cards.map((card) => { 
      return(
        
        <Card id={card.card.id} text={card.card.text} emoji={card.card.emoji} deleteCardCallback={this.deleteCard}></Card>
      )
    }

    )

    return (
      <div>
     
      <div className="board">
       {cardComponents}
       
      </div>
      <div>
      <NewCardForm addCardCallback={this.addCard}></NewCardForm>
      </div>
    </div> 
  
    )
  }

}

Board.propTypes = {

};

export default Board;
