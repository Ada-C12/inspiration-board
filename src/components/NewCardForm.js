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
      emoji: ''
    }
  }

  onFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      text: this.state.text,
      emoji: this.state.emoji
    };

    this.setState({
      text: '',
      emoji: ''
    });

    this.props.addCardCallback(newCard);
  }

  makeEmojis () {
    const availableEmojis = EMOJI_LIST.map((emojiName, i) => {
      return (
        <option key={i} value={emojiName}>
        { emoji.getUnicode(emojiName)}
        </option>
      );
    });
    return availableEmojis
  }

  render() {
    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>
        <h2 className="new-card-form__header">Write New Message</h2>
        <div className="new-card-form__form">
          <div>
            <label 
              htmlFor="text"
              className="new-card-form__form-label"
            >Message:</label>
            <input 
              name="text"
              onChange={this.onFieldChange}
              className="new-card-form__form-textarea"
            />
          </div>
          <div>
            <label 
              htmlFor="emoji"
              className="new-card-form__form-label"
            >Emoji:</label>
            <select 
              name="emoji"
              onChange={this.onFieldChange}
              className="new-card-form__form-select"
            >
              { this.makeEmojis() }
            </select>
          </div>
        </div>
        <br></br>
        <input
          type="submit"
          value="Add"
          className="new-card-form__form-button"
        />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;