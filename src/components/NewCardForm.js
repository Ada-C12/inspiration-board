import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.text || this.state.emoji) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
      });

      this.setState({
        text: '',
        emoji: '',
      });
    }
  }

  render () {

    const allEmojis = EMOJI_LIST.map((oneEmoji, i) => {
      return(
        <option
        key={i}
        value={oneEmoji}>
          {emoji.getUnicode(oneEmoji)}
        </option>
      )
    })

    return (
      <form className="new-card-form" onSubmit={this.onSubmitHandler}>
        <h3 className="new-card-form__header">Add a Card</h3>

        <div>
          <label className="new-card-form__form-label" htmlFor="text">Text: </label>
          <input
            name="text"
            id="text"
            onChange={this.onInputChange}
            value={this.state.text}
          />
        </div>
        <div>
          <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
          <select
            className="new-card-form__form-select"
            name="emoji"
            id="emoji"
            onChange={this.onInputChange}
            value={this.state.emoji}
          >
            {allEmojis}
          </select>
        </div>
        <input
          className="new-card-form__form-button"
          type="submit"
          name="submit"
          value="Add a Card"
          onClick={this.onSubmitHandler}
        />
      </form>
    );
  }



}

export default NewCardForm;