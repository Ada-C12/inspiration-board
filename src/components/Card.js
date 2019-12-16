import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  
  
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  render() {
    const currentEmoji = this.props.emoji
    return (
      <div className="card">
        <section className='card__content'>
          <section className='card__content-emoji'>{currentEmoji ? emoji.getUnicode(currentEmoji) : null}</section>
          <section className='card__content-text'>{this.props.text} </section>
        </section>
        <button className='card__delete' type='button' onClick={() => { this.props.deleteCardCallback(this.props.id) } }>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
