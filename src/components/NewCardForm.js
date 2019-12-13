import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
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

  onFieldChange = (event) => {
    const updatedState = {};

    const name = event.target.name;
    const value = event.target.value;

    updatedState[name] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.text || this.state.emoji) {
      this.props.addCardCallback(this.state);

      this.setState({
        text: '',
        emoji: '',
      });
    }
  }

  render () {
    const emojiOptions = EMOJI_LIST.map((emoji, i) => <option key={ i } value={ emoji }>{ emoji }</option>);

    return (
      <form className="new-card-form" onSubmit={ this.onSubmitHandler }>
        <h1 className="new-card-form__header">Add a Card</h1>
        <div className="new-card-form__form">
          <div>
            <label className="new-card-form__form-label" htmlFor="text">Text: </label>
            <input
              className="new-card-form__form-textarea"
              name="text"
              id="text"
              onChange={ this.onFieldChange }
              value={ this.state.text }
            />
          </div>
          <div>
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
            <select
              className="new-card-form__form-select"
              name="emoji"
              id="emoji"
              onChange={ this.onFieldChange }
              value={ this.state.emoji }
            >
              { emojiOptions }
            </select>
          </div>
          <input
            className="btn btn-success new-card-form__form-button"
            type="submit"
            name="submit"
            value="Submit"
            onClick={ this.onSubmitHandler }
          />
        </div>
      </form>
    );
  }
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
