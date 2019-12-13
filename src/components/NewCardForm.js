import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDict from 'emoji-dictionary';
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

  onFormSubmit = (event) => {
    event.preventDefault();

    let newCard = {};
    newCard.text = this.state.text;
    newCard.emoji = this.state.emoji;

    this.props.addCard(newCard);
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
  }

  makeEmojiOptions = (emojiList) => {
    return emojiList.map((emoji, i) => {
      return <option 
          value={emoji} 
          key={ i }
      >{emojiDict.getUnicode(emoji)}
      </option>
    });
  }

  render() {
    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>
        <h3 className="new-card-form__header">Add a Card</h3>
        <div className="new-card-form__form">
          <div>
            <label className="new-card-form__form-label" htmlFor="text">Text: </label>
            <textarea 
              name="text" 
              className="new-card-form__form-textarea"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
            <select 
              name="emoji" 
              className="new-card-form__form-select"
              value={this.state.emoji}
              onChange={this.onInputChange}
            >
              {this.makeEmojiOptions(EMOJI_LIST)}
            </select>
          </div>
          <input 
            type="submit"
            name="submit"
            value="Add Card"
            className="new-card-form__form-button"
          />
        </div>
      </form>
    )
  }
}

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
}

export default NewCardForm;