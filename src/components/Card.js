import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import { Button} from 'react-bootstrap';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.emoji) {
      return (
        <div className="card">
          <p className="card__content card__content-text">{this.props.text}</p>
          <p className="card__content card__content-emoji">{emoji.getUnicode(this.props.emoji)}</p>
          <Button variant="outline-danger" onClick={() => {this.props.onDelete(this.props.id)}}>Delete</Button>
        </div>
      )
    }
    else {
      return (
        <div className="card">
          <p className="card__content card__content-text">{this.props.text}</p>
          <Button variant="outline-danger" onClick={() => {this.props.onDelete(this.props.id)}}>Delete</Button>
        </div>
      )
    }
  }
}

Card.propTypes = {

};

export default Card;
