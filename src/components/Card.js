import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  printableCards = this.props.cardData.map((card, i) => {
     return <div key={i}>
       {card.text || card.emoji || card.Emoji}
     </div>
    });
    // {emoji.getUnicode("heart_eyes")}

  render() {
    return (
      <div className="card">
        {this.printableCards}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
