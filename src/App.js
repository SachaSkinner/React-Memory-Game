import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";


class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    clicked: []
  };

  checkIfRepeat = (id) => {
    if (this.state.clicked.includes(id)) {      
      return true;
    }
    return false;
  }

  clickCard = (id) => {
    if(!this.checkIfRepeat(id)){
      this.state.clicked.push(id);
      this.setState({ clicked: this.state.clicked });
      this.shuffleAll();
    } else {
      alert("Oops..Try again!");
      this.setState({ clicked: [] });
      this.setState({characters: characters.sort((a,b) => { return a.id - b.id; })});
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
    return (
      <Wrapper>
        <Title>React Memory Game!</Title>
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
