import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDeleteCard = () => {
    this.props.delete(this.props.key);
  }

  render() {
    return (
      <div className="card">
        <span> 
         { this.props.text } 
         {/* { emoji.getUnicode(this.props.emoji) } */}
        </span>
        <button onClick={this.onDeleteCard}>Delete Card</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
