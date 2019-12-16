import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
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

  onSubmitCard = (event) => {
    event.preventDefault();
    
    if (this.state.text) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji
      });

      this.setState({
        text: '',
        emoji: ''
      })
    }
  }


  render () {
    return (
      <section className= 'new-card-form'>
        <form className="new-card-form" onSubmit={this.onSubmitCard}>
          <h3 className="new-card-form__header">add a card</h3>

          <div>
            <label className="new-card-form__form-label" htmlFor="text"> Text here: </label>
            <input
              className="new-card-form__form-textarea"
              name="text"
              id="text"
              placeholder="text"
              onChange={this.onInputChange}
              value={this.state.text}
            />
          </div>

          <div>
          <label className="new-card-form__form-label" htmlFor="emoji"> Emoji here: </label>
            <input
              className="new-card-form__form-textarea"
              name="emoji"
              id="emoji"
              placeholder="emoji"
              onChange={this.onInputChange}
              value={this.state.emoji}
            />
          </div>
          <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add a Card"
            onClick={this.onSubmitCard}
          />
        </form>
      </section>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
}

export default NewCardForm