import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  createNewCard(text, emoji) {
    axios
      .post(
        "https://inspiration-board.herokuapp.com/boards/MicMackieMacksBoard2/cards"
          .concat("?text=")
          .concat(text)
          .concat("&emoji=")
          .concat(emoji)
      )
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
        this.setState({
          showPopup: !this.state.showPopup
        });
      });
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1">
            <span className="header__text">Inspiration Board</span>
          </h1>
        </header>
        <NewCardForm
          text="Create new card"
          createNewCard={this.createNewCard.bind(this)}
        />
        <Board
          url="https://inspiration-board.herokuapp.com/"
          boardName="boards/MicMackieMacksBoard2"
        />
      </section>
    );
  }
}

export default App;
