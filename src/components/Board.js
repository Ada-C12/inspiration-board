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
      error: undefined,
    };
  }
  
  componentDidMount() {
    const url = `${this.props.url}${this.props.boardName}/cards`

    axios.get(url)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  // deletePet = (petId) => {
  //   axios.delete(`http://localhost:3000/pets/${ petId }`)
  //     .then((response) => {
  //       const petList = this.state.petList.filter((pet) => pet.id !== petId);
  
  //       this.setState({
  //         petList,
  //       });
  //     })
  //     .catch((error) => {
  //       this.setState({ error: error.message });
  //     });
  // };



  render() {
    const cards = this.state.cards

    const cardCollection = cards.map((item, i) => {
      return (
        <Card key={i} text={item.card.text} emoji={item.card.emoji} />
      );
    });

    return (
      <div className="board">
        {cardCollection}
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
