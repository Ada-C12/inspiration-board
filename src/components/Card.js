import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

class Card extends Component {

  // constructor(props) {
  //   super(props);
  // }

  emojiPresent () {
    const emoji = require('emoji-dictionary');
    return emoji.getUnicode(this.props.cardEmoji)
  }

  onDeleteClick = () => {
    // console.log(this.props)

    return this.props.deleteCardCallback(this.props.id)
    // why did I have to change this to an arrow function in order for it to have access to this.
    // I didn't have to do that with the this statements in render.


    // arrow functions don't get their this from the left of the period(.)
    // not trying the change the card state, I'm trying to change the board state. 
    // Call back functions are always passed down.

  }

  render() {
    // console.log(this.props);
    return (
      <section className="card">
        <div className='card__content'>
          <div className='card__content-text'>{this.props.cardText}</div>
          <div className='card__content-emoji'>{this.props.cardEmoji ? this.emojiPresent(): ''}</div>
          {/* <button onClick={onTogglePresentClick}>Mark
          {present ? ' Absent' : ' Present'}
          </button> */}
          <div className='card__delete'><button onClick={this.onDeleteClick}>Delete</button></div>
          {/* Without parenthesis calling function (Go to the function) right then and there, with parenthesis
          you are just giving it the whole function. Like it can't do anything with it.*/} 
        </div>
      </section>
    )
  }
}


Card.propTypes = {

};

export default Card;
