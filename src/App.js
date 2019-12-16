import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "https://inspiration-board.herokuapp.com/boards/c-gutierrez/cards",
      name: "c-gutierrez",
      cardList: []
    }
  };

  componentDidMount() {
    axios.get(`https://inspiration-board.herokuapp.com/boards/c-gutierrez/cards`)
    .then((response) => {
      this.setState({
        cardList: response.data})
    })
    .catch((error) => { 
    this.setState ({error: error.message})
    });
  }

  addNewCard = (card) => {
    axios.post('https://inspiration-board.herokuapp.com/boards/c-gutierrez/cards', card)
    .then((response) => {
      const updatedData = this.state.cardList
      updatedData.push(response.data);
      this.setState({
        cardList: updatedData,
        error: ''});
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  deleteCard = (id) => {
    // this portion of the method updates the local list of active cards
    const allCards = this.state.cardList
    let filtered = []
    console.log(this.state.cardList)
    allCards.forEach ((card) => {
      if (card.card.id != id) {
      filtered.push(card)
      }
    })
    this.setState({cardList: filtered}) 

    //this portion of the method updates the database through an API call
    axios.delete(`https://inspiration-board.herokuapp.com/cards/:card_id/${id}`)
    .then((response) => {
      this.setState({
        cardList: response.data})
    })
    .catch(() => { 
    this.setState ({error: "Something went wrong. "})
    });    
  }

  render() {
    return (
      <section>

        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          boardName={this.state.name}
          url={this.state.url}
          cardList={this.state.cardList}
          deleteCardCallback={(id) => this.deleteCard(id)}
          />
        <NewCardForm
        onAddCardCallback={(card) => this.addNewCard(card)}/>

      </section>
    );
  }
}

export default App;