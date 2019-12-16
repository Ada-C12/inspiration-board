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

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    
    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }


  onSubmit = (event) => {
    event.preventDefault();
    
    const card = {
      text: this.state.text,
      emoji: this.state.emoji
    }

    this.props.addCardCallback(card)
    
    this.setState({
      text: '',
      emoji: '',
    });
  }

  render () {
    const emojiOptions = EMOJI_LIST.map((icon, i) => {
        return <option value={icon} key={i}>{emoji.getUnicode(icon)}</option>
      });
    
    
    return (
      <section className='new-card-form'>
        <h2 className='new-card-form__header'> Add A New Card</h2>
        
        <form className='new-card-form__form' onSubmit={this.onSubmit} name="new-card-form">
            <label 
              className="new-card-form__form-label"
              htmlFor="text">Text: 
            </label>
            <input 
              className="new-card-form__form new-card-form__form-textarea"
              name="text" 
              placeholder="You are amazing :)" 
              onChange={this.onFormChange} 
              value={this.state.text} 
            />

            <label
              className="new-card-form__form-label"
              htmlFor="emoji"
            > Emoji:
            </label>

            <select
              className="new-card-form__form new-card-form__form-select"
              name="emoji"
              onChange={this.onFormChange}
              value={this.state.emoji}
            >
              {emojiOptions}
            </select>

            <input className= 'new-card-form__form-button' type="submit" value="submit" />        
        </form>
      </section>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;