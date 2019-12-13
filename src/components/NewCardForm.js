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

  onChange = ({ target: { name, value }}) => {
    this.setState( {[name]: value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ text: '', emoji: '' });
  }

  emojiOption = (emojiName, i) => {
    return (
      <option value={emojiName} key={i}>
        {emoji.getUnicode(emojiName)}
      </option>
    );
  }

  render() {
    return(
      <div className='new-card-form'>
        <header className='new-card-form__header'>
          Add a New Card
        </header>
        <form className="new-card-form__form"
          onSubmit={this.onSubmit}>
          <label className='new-card-form__form-label'
            htmlFor='text'/>
          <input className='new-card-form__form-textarea'
            type='textarea'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <select className='new-card-form__form-select'
            name='emoji' onChange={this.onChange}>
            {EMOJI_LIST.map((emoji, i) => this.emojiOption(emoji, i))}
          </select>
          <input type='submit'
            className='new-card-form__form-button'
            value='Add Card'
          />
        </form>
      </div>
    );
  }
}

export default NewCardForm;
