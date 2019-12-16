import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.text}</p>
        <button
          type="button"
          className="btn btn-danger card--delete-btn"
          aria-label="Delete"
          onClick={() => {this.props.deleteCardCallback(this.props.id)}}
        >Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  // quote: PropTypes.string.isRequired,
};

export default Card;
