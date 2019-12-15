import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className='card'>
        <button type="button" class="card__delete">
          Delete
        </button>
        
        <section className="card__content">
            <h2 className="card__content-text">
              {this.props.text}
            </h2>
          
          <div className='card__content-emoji'>
            {this.props.emoji}
          </div>
        </section>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
