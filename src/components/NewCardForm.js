import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
    text: '',
    emoji: '',
    };
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div className="new-card-form" >
        <form className="new-card-form__form" onSubmit={this.handleSubmit}>
          <div>
            <header className="new-card-form__header">add a card</header>
            <label new-card-form__form-label="new-card-form__label">text:</label>
            <input
              value={this.state.text}
              name="state"
              placeholder="enter text here"
              onChange={this.handleChange}
              className="new-card-form__form-textarea" />
          </div>
          <button className="new-card-form__form-button">submit</button>
        </form>
      </div>
    )
  }
};

export default NewCardForm;