import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    }
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newCard = {}
    for (const field of Object.keys(this.state)) {
      newCard[field] = this.state[field]
    }

    const newState = {}
    for (const field of Object.keys(this.state)) {
      newState[field] = ''
    }

    this.setState(newState);

    this.props.addCardCallback(newCard);
  }

  showEmojiList = () => {
    const emojiList = EMOJI_LIST.map((emoji, i) => {
      return <option key={i} label={emoji} value={emoji}>{emojiDictionary.getUnicode(emoji)}</option>   
    })

   return emojiList
  }

  render() {
    return (
      <div className="new-card-form">
        <h3 className ="new-card-form__header">New Card Form</h3>

        <form className="new-card-form__form" onSubmit={this.onFormSubmit} >
          <div>
            <p className="new-card-form__form-label ">Card Text</p>
            <input
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.onFieldChange}
                className="new-card-form__form-textarea"
              />
            </div>
          <div>
            <p className="new-card-form__form-label ">Card Emoji</p>
            <select
                type="text"
                name="emoji"
                value={this.state.emoji}
                onChange={this.onFieldChange}
                className="new-card-form__form-textarea"
              >
                {this.showEmojiList()}
              </select>
          </div>
          <div >
            <input type="submit" value="Submit Card" className="new-card-form__form-button" />
          </div>
        </form>
      </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;