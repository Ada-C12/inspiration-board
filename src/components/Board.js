import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: '',
    }
  }

  makeCards () {
    const boardCards = this.state.cards.map((item, i) => {
      return <Card
        key={i}
        id={item.card.id}
        text={item.card.text}
        emoji={item.card.emoji}
        deleteCardCallback={this.deleteCard}
      />;
    });
    return boardCards
  }

  componentDidMount() {
    axios.get(`${this.props.url}/boards/${this.props.boardName}/cards`)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  deleteCard = (targetId) => {
    axios.delete(`${this.props.url}/cards/${targetId}`)
      .then((response) => {
        const updatedData = this.state.cards.filter(
          (item) => item.card.id !== targetId
        );
        this.setState({
          cards: updatedData,
          error: ''
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      }); 
  }

  addCard = (card) => {
    axios.post(`${this.props.url}/boards/${this.props.boardName}/cards`, card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data);
        this.setState({
          cards: updatedData,
          error: ''
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      }); 
  }

  render() {
    return (
      <div>
        { this.state.error === ''?
          <div className="board">
            { this.makeCards() }
          </div>
          :
          <div className="validation-errors-display validation-errors-display__list">
            { this.state.error }
          </div>
        }
        <NewCardForm addCardCallback={this.addCard}/>
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
