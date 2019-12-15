import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import Board from './Board';

import './Card.css';

class Card extends Component {
  
  render() {
   
    // const cardsCollection = this.props.cards.map((card, i) => {
    //   return card.text
    // });

    return (
      <div className="card">
        {this.props.text}
        {this.props.emoji}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
