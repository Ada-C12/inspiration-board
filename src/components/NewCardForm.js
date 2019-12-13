import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: '',
    }

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange = (event) => {
    let value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.setState({
      text: '',
      emoji: '',
    });

    this.props.addCard({
      text: this.state.text,
      emoji: this.state.emoji,
    });
  }

  render() {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Create a new card!</h3>
        <form className="new-card-form__form">
          <input 
            className="new-card-form__form-textarea"
            type="text"
            placeholder="Enter a text"
            onChange={this.onFormChange}
            value={this.state.text}
            name="text" 
          />
          <input 
            className="new-card-form__form-textarea"
            type="text"
            placeholder="Enter an emoji name"
            onChange={this.onFormChange}
            value={this.state.emoji}
            name="emoji" 
          />
          <div>
            <input className="new-card-form__form-button" onClick={this.onFormSubmit} type="submit" value="Submit Card"/>             
          </div>
        </form>
      </div>
    )
  }

}

NewCardForm.propTypes = {
  addCard: PropTypes.func,
};

export default NewCardForm;