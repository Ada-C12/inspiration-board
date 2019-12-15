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

  onTextChange = (event) => {
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
    console.log(`updated text: ${this.state.text}`)
  }

  onEmojiChange = (event) => {
    console.log(event.target.value)
    this.setState({
      emoji: event.target.value
    })
    console.log(`updated emoji: ${this.state.emoji}`)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const message = {
      text: this.state.text,
      emoji: this.state.emoji
    }
    console.log('state updated')
    this.setState({
      text: '',
      emoji: '',
    })
    console.log('calling callback function')
    this.props.addCardCallback(message)
  }

  render() {
    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="text">Text: </label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.onTextChange}
          />
        </div>
        <div>
          <label htmlFor="emoji">Emoji: </label>
          <input
            name="emoji"
            value={this.state.emoji}
            onChange={this.onEmojiChange}
          />
        </div>
        <input
          className="new-card-form__form-button"
          type="submit"
          value="Add Card"
        />
      </form>
    );
  }
}
export default NewCardForm