import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      note: '',
    }
  }

  onSubmitNote = (event) => {
    event.preventDefault();

    // this.props.addNoteCallback(note);

    this.setState({
      note: '',
    });
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
      <div className="NewCardForm">
        <h3>Submit Inspiration Note</h3>

        <form className="NewCardForm__form" onSubmit={this.onSubmitNote}>

          <div className="NewCardForm__note-input">
            <input
              name="note"
              placeholder="Inspirational note here"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.note}
            />
          </div>

          <div className="NewCardForm__submit">
            <input type="submit" value="Submit Line" className="NewCardForm__submit-btn" />
          </div>
        </form>
      </div>
    ); 
  }
}

export default NewCardForm;

