import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
constructor(props) {
    super(props);

    this.state = {
        text: "",
        emoji: "",
    }
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
				if(this.state.text || this.state.emoji){
					this.props.addCardCallback({
						text: this.state.text,
						emoji: this.state.emoji
					}
					)
				}
				this.setState({
					text: "",
					emoji: ""
			}) 
				
    }
    

    render() {
        const emojiOptions = EMOJI_LIST.map((smile) => {
	
    

            return(
              
                <option value={smile}> {emoji.getUnicode(smile)}</option>
            )
          })
  
        return(
          <div> 
          <h1 className="new-card-form__header"> Add a Card </h1> 
            <form className="new-card-form" onSubmit={this.onSubmit}>
            <label className="new-card-form__form-label" htmlFor="text">Text: </label>
            <input
						className="new-card-form__form-textarea"
            name="text"
            id="text"
            onChange={this.onInputChange}
            value={this.state.text}
          />
          
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
            <select
              name="emoji"
              id="emoji"
              onChange={this.onInputChange}
              value={this.state.emoji}
            className="new-card-form__form-select"
            >
            {emojiOptions}

            </select>
						<input
          className="new-card-form__form-button"
          type="submit"
          name="submit"
          value="Add a Card"
        />
          
          </form>
          </div>
        )
    }
}
NewCardForm.propTypes = {
  addCardCallback: PropTypes.func

};

export default NewCardForm