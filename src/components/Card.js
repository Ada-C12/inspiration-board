import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const getEmoji = () => {
      if (this.props.emoji){
        return emoji.getUnicode(this.props.emoji)
      }
    }
    
    return (
      <div className='card'>
        <div className="card__delete" onClick={this.props.deleteCardCallback}>
        <button className="card__delete"> Delete </button>
        </div>
        
        <section className="card__content">
            <h2 className="card__content-text">
              {this.props.text}
            </h2>
          
          <div className='card__content-emoji'>
            {getEmoji()}
          </div>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  
};

export default Card;
