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
//      cards: CARD_DATA.cards,
      url: props.url,
      boardName: props.boardName,
      board: [],
      error: ''
    };
  }


  componentDidMount () {
    axios.get(this.state.url+this.state.boardName+'/cards')
    .then((response) => {
      this.setState({ board: response.data });
      console.log(this.state.board)
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(this.state.error)
    });
  }

  makeCollection () {
    const cardCollection = this.state.board.map((card, i) => {
      return <Card
      key={i}
      id={card.card.id}
      text={card.card.text}
      curEmoji={card.card.emoji}
      deleteCardCallback = {this.deleteCard}/>
    });
    return cardCollection
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        const updatedBoard = this.state.board.filter((card) => card.card.id !== id);
        this.setState({
          board: updatedBoard,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(this.state.error)
      });
    };

  addCard = (card) =>{
    console.log(card.text, card.curEmoji)
    axios.post(this.state.url+this.state.boardName+'/cards', {text: card.text, emoji: card.curEmoji})
      .then((response) => {
        console.log(response.data)
        const { board } = this.state;
        const newCard = {
          "card": {
            "id": response.data.card.id,
            "text": response.data.card.text,
            "emoji": response.data.card.emoji
          }
        }
        console.log(newCard)
        console.log(board)
        board.push(newCard);
        this.setState(board);
        console.log('did post')
      })
      .catch((error) => {
        this.setState({error: error.message});
        console.log(this.state.error)
      });
  };

  render() {
    return (
      <ul className="board">
        {this.makeCollection()}
        <NewCardForm addCardCallback={this.addCard}/>
      </ul>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
