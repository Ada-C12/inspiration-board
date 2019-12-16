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
      curEmoji: '',
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
      curEmoji: event.target.value
    })
    console.log(`updated emoji: ${this.state.curEmoji}`)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const message = {
      text: this.state.text,
      curEmoji: this.state.curEmoji,
    }
    console.log(message)
    console.log('state updated')
    this.setState({
      text: '',
      curEmoji: '',
    })
    console.log(`calling callback function with ${message.curEmoji}`)
    this.props.addCardCallback(message)
  }

  render() {
    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>
        <h3 className="new-card-form__header">Add Some Inspiration!</h3>
        <div className="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="text">
            Text:
          </label>
          <input
            className="new-card-form__form-textarea"
            name="text"
            value={this.state.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="curEmoji">
            Emoji:
          </label>
          <input
            className="new-card-form__form-textarea"
            name="curEmoji"
            value={this.state.curEmoji}
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

NewCardForm.propTypes = {
  text:PropTypes.string,
  curEmoji: PropTypes.string,
  addCardCallback:PropTypes.func
};

export default NewCardForm