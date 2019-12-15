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

  cardList = () => {
    return this.state.cards.map((card, i) => {
      return <Card
              key={i}
              deleteCardCallback={this.deleteCard}
              {...card} />
    })
  }
  
  //componentDidMount get request to get cards from api

  //addCard

  //deleteCard
  render() {
    return (
      <div className='board'>
        <section >{this.cardList()} 
        </section>
        
      

      <section> <NewCardForm />
      </section>

      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
