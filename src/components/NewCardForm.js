import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      emoji: ''
    }
  }

  addCard = (event) => {
    console.log("cool")
    event.preventDefault()
    this.props.addCardCallback(this.state.text, this.state.emoji)
  }

  onTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  onEmojiChange = (event) => {
    this.setState({emoji: event.target.value})
  }

  render(){
    const addCard = <div>
      <input type="submit" value="Add Card"></input>
    </div>

    return (
      <form onSubmit={this.addCard}>
        <input placeholder="Text:" value={this.state.text} onChange={this.onTextChange}></input>
        <select value={this.state.emoji} onChange={this.onEmojiChange}>
          <option value={""}>Choose an Emoji</option>
          { emoji.names.map((name, i) => {
            return (
              <option value={name} key={i}> {emoji.getUnicode(name)} </option>
            )
          })}

        </select>
        { addCard }
      </form>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
}
export default NewCardForm