import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)
  }

  

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            {this.props.emoji ? emojiDictionary.getUnicode(this.props.emoji) : '' }
          </div>
        </div>


      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
