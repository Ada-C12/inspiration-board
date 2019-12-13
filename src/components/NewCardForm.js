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

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {
    return (
      <div className='new-card-form '>
        <form className='new-card-form__form ' onSubmit={this.submitComment}>

          <input type='text'
          htmlFor='comment'
          placeholder='type a message'
          onChange={this.onInputChange}
          value={this.state.comment} />
        
      

      <div>
        <input type='submit'
        value='Submit Comment'
        className='new-card-form__form-button' />
      </div>

      </form>

      </div>
    )

  }


}
export default NewCardForm;