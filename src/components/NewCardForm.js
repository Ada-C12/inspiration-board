import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import { throwStatement } from '@babel/types';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

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

    const { comment, emoji } = this.state;

    this.props.addCardCallback(this.state)
    this.resetState();
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
          <input type='text'
          htmlFor='emoji'
          placeholder='type a message'
          className='new-card-form__form-textarea'
          onChange={this.onInputChange}
          value={this.state.emoji} />
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