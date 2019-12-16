import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super();
    this.propers = props;
    this.addCard = props.addCard;
    this.state = {
      text: props.newCardForm.text,
      emoji: props.newCardForm.emoji,
    }
  }
  
  resetForm = () => {
      this.setState({
        text: '',
        emoji: '',
      })  
  }

  renderEmojis = EMOJI_LIST.map((listItem, i) => {      
      return (
        <div key={i}>
          <input
            name="emoji"
            type="radio"
            defaultChecked={listItem === ''}
            value={listItem}
            onChange={(event) => { this.addCardData('emoji', event.target.value) }}
          />
          <label htmlFor={listItem}>
            {listItem === '' ? 'no emoji' : emoji.getUnicode(listItem)}
          </label>
        </div>
      )
    })
  
  addCardData = (input, data) => {
    this.setState({
      [input]: data
    });
    const card = this.state;
    return card;
  }

  render() {    
    return (
      <div className="new-card-form">
        <header className="new-card-form__header">
          Add New Card
        </header>
        <form onSubmit={(event) => { event.preventDefault(); this.addCard(this.state); this.resetForm() }} className="new-card-form__form">
          <input
            placeholder="text"
            className="new-card-form__form-textarea"
            type="text"
            value={this.state.text}
            onChange={(event) => { this.addCardData('text', event.target.value) }}
          />
          {this.renderEmojis}
          <button
            className="new-card-form__form-button"
            type="submit"
          >
            ADD CARD
          </button>
          </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
}

export default NewCardForm