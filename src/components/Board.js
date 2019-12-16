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
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      const cards = [];
      response.data.forEach((card) => {
        cards.push({
          text: card.card.text,
          emoji: card.card.emoji,
          id: card.card.id
        })
      });
      this.setState({
        cards,
      });
    })
    .catch((response) => {
      this.setState({
        message: `${response.data}`,
      })
    })
  }

  cardList = () => {
    return this.state.cards.map((card, i) => {
      return (<Card
              key={i}
              deleteCardCallback={this.deleteCard}
              {...card} />)
    })
  }

  //addCard
  addCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
    .then((response) => {
      console.log(response);
      card.id = response.data.card.id;

      this.setState({
        cards,
      });
    })
    .catch((response) => {
      console.log(response);
      this.setState({
        message: `${response.data}`,
      })
    })
    const cards = this.state.cards;
    cards.push(card);

    this.setState({
      cards,
    });
  }

  //deleteCard

  render() {
    return (
      <div>
        <section> <NewCardForm addCardCallback={this.addCard}/>
        </section>

        <section className='board'>{this.cardList()} 
        </section>
        
  
      

      </div>
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
