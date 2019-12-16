import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import { throwStatement } from '@babel/types';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      emoji: '',
    }
  }

  resetState = () => {
    this.setState({
      comment: '',
      emoji: '',
    });
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      id: this.state.id,
      text: this.state.text,
      emoji: this.state.emoji,
    };

    this.props.addCardCallback(newCard)
    this.resetState();
  }

  createEmojis = () => {
    const emojiList = EMOJI_LIST.map((text) => {
      return (
        <option value={text}>{emoji.getUnicode(text)}</option>
      )
    });
    return emojiList;
  }

  render() {
    return (
      <div className='new-card-form '>
        <h1 className='new-card-form__header'>New Card Form</h1>
        <form className='new-card-form__form ' 
              onSubmit={this.onSubmit}>

        <div className='new-card-form__form-label'>Text
          <input type='text'
          htmlFor='comment'
          placeholder='type a message'
          className='new-card-form__form-textarea'
          onChange={this.onInputChange}
          value={this.state.comment} />
        </div>
      
        <div className='new-card-form__form-label'>Emoji
          <select
          htmlFor='emoji'
          className='new-card-form__form-select'
          onChange={this.onInputChange}
          value={this.state.emoji}>
          {this.createEmojis()}
          </select>
        </div>


      <div>
        <input type='submit'
        value='Submit Card'
        className='new-card-form__form-button' />
      </div>

      </form>

      </div>
    )

  }

}


NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;