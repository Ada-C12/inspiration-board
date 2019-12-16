import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
 
  render() {
   
    return (
      <div className="card">
        
        <div className="card__content"> 
      
        <div className="card__content-text"> 
        {this.props.text}
        </div>
       <div className="card__content-emoji"> 
        { this.props.emoji ? emoji.getUnicode(this.props.emoji) : ""}
       </div>
      


        </div>
        <button
          className="card__delete"
          onClick={() => { this.props.deleteCardCallback(this.props.id) }}
        >
         Delete
        </button>
      
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func

};

export default Card;
