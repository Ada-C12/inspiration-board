import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class cardSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text, emoji } = this.state;
    
    console.log(event);
    
    if (text === '' && emoji === '') {
      return;
    }
    
    this.props.addCardCallback(this.state);

    this.resetState();

  }

  render() {

    return (
      <div className="new-card-form ">

        <h3 className='new-card-form__header'>New Card Form</h3>

        <form className="new-card-form__form" onSubmit={this.onSubmit}>

          <div>
          <label className="new-card-form__form-label">Text: </label>
            <input className="new-card-form__form-textarea"
              type="text"
              name="text"
              onChange={this.onFormChange}
              value={this.state.text}
              />
          <label className="new-card-form__form-label">Emoji: </label>
            <input className="new-card-form__form-textarea"
              type="text"
              name="emoji"
              onChange={this.onFormChange}
              value={this.state.emoji}
              />
            <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add a Card"
            onClick={this.onSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default cardSubmissionForm;
