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
    }
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const message = {
      text: this.state.text,
      emoji: this.state.emoji
    }
    this.setState({
      text: '',
      emoji: '',
    })
    this.props.addCardCallback(message)
  }
  
  render() {
    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="emoji">Emoji:</label>
          <input
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}
          />
        </div>
        <input new-card-form__form-button
          type="submit"
          value="Add Card"
        />
      </form>
    );
  }
}
export default NewCardForm