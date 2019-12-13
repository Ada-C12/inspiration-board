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
  }

  render() {
    return(
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
        <input type='submit'
          className='new-card-form__form-button'
          value='Add Card'
        />
      </form>
    );
  }
}

export default NewCardForm;
