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

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.addCardCallback({
      text: this.state.text,
      emoji: this.state.emoji
    });

    this.setState({
      text: '',
      emoji: ''
    });
  }
  
  render () {
    const emojiOptions = EMOJI_LIST.map((icon, i) => {
      if (icon === "") {
        return <option value={icon} key={i}></option>
        } else {
        return <option value={icon} key={i}>{emoji.getUnicode(`${icon}`)}</option>
        };
    })
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add Your Own!</h3>
          <form className="new-card-form__form" onSubmit={this.onSubmitHandler}>
            <label className="new-card-form__form-label">
              Message:
              <textarea
                name='text'
                value={this.state.text}
                onChange={this.onInputChange}
                placeholder='Write a message'
                className='new-card-form__form-textarea' />
            </label>

            <label className="new-card-form__form-label">
              Emoji:
              <select
                name="emoji"
                className='new-card-form__form-select'
                value={this.state.emoji}
                onChange={this.onInputChange}>
                <option value="">Add an Emoji</option>
                {emojiOptions}
              </select>
            </label>
            <button
              className='new-card-form__form-button'>
                Add Your Note
            </button>
          </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;