import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Card from './Card';

// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

// class Board  Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     boardName: props.boardName,
  //     url: props.url,
  //     // cards: CARD_DATA.cards, // built for hard-coded json, needs different parsin for API
  //     cardList: props.cardList,
  //     error: '',
      
  //   };
  // }

  // deleteCard = () => {this.props.deleteCardCallback()}

  const parseCards = (cardList, deleteCardCallback) => {
    if (cardList === undefined) {return ''}
    else {
      return cardList.map((card) => {
        // return <Card text={card.text} emoji={card.emoji}/>
        // } // built for card-coded json. Needs different parsing for API
        return (
          <Card
            key={card.card.id}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            deleteCardCallback={deleteCardCallback}/>
        )
      })
    }
  }

  const Board = ({cardList, deleteCardCallback}) => {
    if (cardList === []) {
      return <div>'' </div>
    }
    else {
      return (
        <div>
          <h3>Board</h3>
          <div>
          {parseCards(cardList, deleteCardCallback)}
          </div>
        </div>
      )
    }
  }



Board.propTypes = {
  cards: PropTypes.array.isRequired,
  deleteCardCallback: PropTypes.func
};

export default Board;
