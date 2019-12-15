import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCard = () => {
    this.props.deleteCardCallack(this.props.id)
  }

  render() {
    const deleteButton = <div>
      <input type="button" value="Delete Card" onClick={this.deleteCard}></input>
    </div>
    return (
      <div className="card">
        {deleteButton} 
        <p> { this.props.text }</p>
        {
          this.props.emoji && 
          <p> { emoji.getUnicode(this.props.emoji) }</p>
        }
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallack: PropTypes.func.isRequired

};

export default Card;
