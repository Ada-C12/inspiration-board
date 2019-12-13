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
    return (
      <div className="card">
        {this.props.text}
      </div>
    )
  }
}

Card.propTypes = {
  key: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
