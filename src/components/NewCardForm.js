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
    this.setState(updatedState)
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.text || this.state.emoji) {
      this.props.addCardCallback({
        text: this.state.text, 
        emoji: this.state.emoji,
      });

      this.setState({text: '', emoji: '',});
    }
  }

  render() {
    const emojis = EMOJI_LIST.map((item, i) => {
      return <option key={i} value={item}>{emoji.getUnicode(item)}</option>
    })

    return (
      <form className="new-card-form" onSubmit={this.onSubmitHandler}>
        <h2 className="new-card-form__header">Add a card</h2>
        <div className="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="text">Text: </label>
          <input
            className="new-card-form__form-textarea"
            name="text"
            id="text"
            type="text"
            onChange={this.onInputChange}
            value={this.state.text}
          />

          <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
          <select 
            className="new-card-form__form-select"
            name="emoji"
            onChange={this.onInputChange}
            value={this.state.emoji}
          >
              { emojis }
          </select>

        <input
          className="new-card-form__form-button"
          type="submit"
          name="submit"
          value="Add Card"
          onClick={this.onSubmitHandler}
          />
        </div>
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
