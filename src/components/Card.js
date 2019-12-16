import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <button
        onClick={() => {this.props.deleteCardCallback(this.props.id)}}>Delete</button>
        <section>
          <p>{this.props.text}</p>
          <p>{this.props.emoji ? emoji.getUnicode(this.props.emoji) : ''}</p>
        </section>

      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
