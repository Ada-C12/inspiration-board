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
      curEmoji={card.card.emoji/* || card.Emoji*/}
      deleteCardCallback = {this.deleteCard}/>
    });
    return cardCollection
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        const updatedBoard = this.state.board.filter((card) => card.id !== id);
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
    axios.post(this.state.url+this.state.boardName+'/cards', card)
      .then((response) => {
        const { board } = this.state;
        board.push(card);
        this.setState(board)
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

};

export default Board;
