import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardSubmissionForm extends Component {
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

    if (this.state.text === '' && this.state.emoji === '') {
      return;
    }

    this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
      });

      this.setState({
        text: '',
        emoji: '',
      });
    }

  render () {
    return (
      <form className="new-card-form" onSubmit={this.onSubmitHandler}>
        <div>
          <label className="new-card-form--label">Text: </label>
          <input className="new-card-form__form-textarea"
            type="text"
            name="text"
            onChange={this.onInputChange}
            value={this.state.text}
          />
        </div>

      <label className="new-card-form__form--label">Emoji: </label>
        <input className="new-card-form__form-textarea"
          type="text"
          name="emoji"
          onChange={this.onInputChange}
          value={this.state.emoji}
      />

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

export default NewCardSubmissionForm;
