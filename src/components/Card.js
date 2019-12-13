import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  
  render() {
    return (
      <div className="card">
        <p>Do more of what makes you happy.</p>
        <p>{emoji.getUnicode("heart_eyes")}</p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
