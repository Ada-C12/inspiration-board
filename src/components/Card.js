import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {

  onDeleteCard = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          { this.props.text ? 
            <span className="card__content-text">
              { this.props.text }
            </span>
            :
            ''
          }
          { this.props.emoji ?
            <span className="card__content-emoji">
              { emoji.getUnicode(this.props.emoji) }
            </span>
            :
            ''
          }
        </div>
        <button 
          type="button"
          onClick={this.onDeleteCard}
          className="card__delete"
        >Delete Card</button>
      </div>
    )
  }
}

Card.propTypes = {
  key: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
