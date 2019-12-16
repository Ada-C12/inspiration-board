import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    
    constructor(props) {
        super(props);  
        this.state = {
            text:"",
            emoji:""
        };
      }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value })
    }

    handleEmojiChange = (event) => {
        this.setState({ emoji: event.target.value })
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{this.props.text}</h1>
                    <input
                        placeholder="Text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                    <input
                        placeholder="Emoji"
                        type="text"
                        value={this.state.emoji}
                        onChange={this.handleEmojiChange}
                    />
                    <button onClick={() => { this.props.createNewCard(this.state.text, this.state.emoji) }}>Create</button>
                </div>
            </div>
        );
    }
}

export default Popup;