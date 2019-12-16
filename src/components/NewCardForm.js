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

    if (this.state.text) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji
      });

      this.setState({
        text: '',
        emoji: '',
      });
    }
  }

  render() {
    return (
      <form className='new-card-form' onSubmit={this.onSubmitHandler}>
        <h3 className='new-card-form__header'>Add a New Card</h3>
        <div>
          <label className='new-card-form__form-label' htmlFor='text'>Text: </label>
          <textarea
          className='new-card-form__form-textarea'
          name='text'
          id='text'
          onChange={this.onInputChange}
          value={this.state.text}
          />
        </div>
        <div>
          <label className='new-card-form__form-label' htmlFor='emoji'>Emoji: </label>
          <input
          // className='new-card-form__form-textarea'
          name='emoji'
          id='emoji'
          onChange={this.onInputChange}
          value={this.state.emoji}
          />
        </div>
        <input
          className="btn btn-success new-card-form__form-button"
          type="submit"
          name="submit"
          value="Add a Card"
          onClick={this.onSubmitHandler}
        />
      </form>
    )
  }

}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;