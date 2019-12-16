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

  onSubmitCard = (event) => {
    event.preventDefault();

    if (this.state.text) {
      this.props.addCardCallback({
        text: this.state.name,
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
      <form className="new-card-form" onSubmit={this.onSubmitCard}>
        <h3 className="new-card-form__header">add a card</h3>
      </form>
    )
  }
}

export default NewCardForm