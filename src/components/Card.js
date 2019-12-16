import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

    deleteCard = () => {
      this.props.deleteCardCallBack(this.props.cardId)
    }

    render() {
      
      return (
        <div className="card">
        <div> <input type="button" value="Delete" onClick={this.deleteCard}></input></div>
        <p> { this.props.text} </p>
        {
          this.props.emoji && <p> { emoji.getUnicode(this.props.emoji) }</p>
        } 
      </div>
    )
  }
}


Card.propTypes = {
text: PropTypes.string,
emoji: PropTypes.string,
cardId: PropTypes.number.isRequired,
deleteCardCallBack: PropTypes.func.isRequired
};

export default Card;
