import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";


class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    clicked: [],
    bestResult: 0,
    currentResult: 0
  };
  checkIfWins = () => {
    if (this.state.clicked.length === characters.length) {
      this.setState({ 
        bestResult: characters.length,
        currentResult: 0
      });
      alert("You win!!!");
    }
  }

  checkIfRepeat = (id) => {
    if (this.state.clicked.includes(id)) {
      return true;
    }
    return false;
  }
  checkIfTheBestIsBest = () => {
    if (this.state.currentResult < this.state.bestResult) {
      this.setState({ bestResult: this.state.bestResult });
    } else {
      this.setState({ bestResult: this.state.currentResult });
    }
  }

  clickCard = (id) => {
    if (!this.checkIfRepeat(id)) {
      this.state.clicked.push(id);
      this.setState({
        clicked: this.state.clicked,
        currentResult: this.state.clicked.length
      });
      this.checkIfWins();
      this.shuffleAll();

    } else {
      alert("Oops..Try again!");
      this.setState({ 
        clicked: [],
        currentResult: 0
      });
      this.setState({ characters: characters.sort((a, b) => { return a.id - b.id; }) });
      this.checkIfTheBestIsBest();


    }

  }

  shuffleAll = () => {
    let shuffledCharacters = this.state.characters.sort(function func(a, b) {
      return 0.5 - Math.random();
    });

    this.setState({ characters: shuffledCharacters });

  }

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    const leftStyle = {
      fontSize: '25px',
      float: 'left',
      display: 'inline-block',
      marginLeft: '100px',
      backgroundColor: 'rgb(88, 78, 88)',
      borderRadius: '20px',
      padding: '15px',
      color: 'white'
    };
    const rightStyle = {
      fontSize: '25px',
      float: 'right',
      display: 'inline-block',
      marginRight: '100px',
      backgroundColor: ' rgb(153, 44, 44)',
      borderRadius: '20px',
      padding: '15px',
      color: 'white'
    };
    const centerStyle = {
      fontSize: '25px',
      textAlign: 'center',
      clear: 'both',
      marginLeft: 0,
      marginRight: 0,
      padding: '15px',

      maxWidth: '300px'
    };
    const cenTer = {
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: 'rgb(163, 130, 39)',
      borderRadius: '40px',
      color: 'white'

    }
    const headerDiv = {

      fontFamily: 'Pacifico'
    }

    return (
      <Wrapper>
        <Title><div style={headerDiv}>React Memory Game!</div><br></br>
          <div style={leftStyle}>Your current result is {this.state.currentResult} from 9.</div>
          <div style={rightStyle}>Your best result is {this.state.bestResult} from 9!</div>
          <div style={cenTer}>
            <div style={centerStyle}>Click all pictures only once and you win!!!</div>
          </div>
        </Title>
        {this.state.characters.map(character => (
          <CharacterCard
            clickCard={this.clickCard}
            image={character.image}
            key={character.id}
            id={character.id}


          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
