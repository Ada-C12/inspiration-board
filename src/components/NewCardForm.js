import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super();
    this.propers = props;
    this.addCard = props.addCard;
    this.state = {
      text: '',
      emoji: ''
    }
  }
  addCardData = (input, data) => {
    this.setState({
      [input]: data
    });
    const card = this.state;
    return card;
  }
  render() {    
    return (
      <div className="new-card-form">
        <header className="new-card-form__header">
          Add New Card
        </header>
        <form onSubmit={(event) => { event.preventDefault(); this.addCard(this.state) }} className="new-card-form__form">
          <input
            className="new-card-form__form-textarea"
            type="text"
            value={this.state.text}
            onChange={(event) => { this.addCardData('text', event.target.value) }} />
          <input
            className=""
            type="radio"
            value={EMOJI_LIST[1]}
            onChange={(event) => { this.addCardData('emoji', event.target.value) }} />
          <label htmlFor={EMOJI_LIST[1]}>{emoji.getUnicode(EMOJI_LIST[1])}</label>
          </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
}

export default NewCardForm