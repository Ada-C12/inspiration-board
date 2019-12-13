import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)

    this.state = {
      quote: null,
    }
  }

  render() {
    return (
      <div className="card">
        Card
      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Card;
