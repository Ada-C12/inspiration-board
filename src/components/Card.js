import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import Board from './Board';

import './Card.css';

class Card extends Component {
  // deleteButton = () => {
  //   return <button onClick={this.props.delTodo.bind(this, id)}>x</button>
  // }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <button 
          type="button"
          className=""
          aria-label="Delete"
          onClick={ () => {this.props.deleteCard(this.props.id)}}
          >
          Delete
          </button>
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div card__content-emoji>
            {this.props.emoji}
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
