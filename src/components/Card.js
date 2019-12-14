import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  
  render() {
    // const showEmoji = emoji.getUnicode(this.props.showEmoji);

    return (
      <div className="card">
        <div className="card__content">
        <p className="card__content-text">{this.props.text}</p>
        {/* <p className="card__content-emoji">{showEmoji}</p> */}

        <button
          type="button"
          className="card__delete"
          onClick={() => { this.props.deleteCardCallback(this.props.id) }}
        >
          Delete
        </button>
        </div>
      </div>
    )
  }
}

// Card.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Card;
