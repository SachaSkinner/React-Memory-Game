import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };


  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>React Memory Game!</Title>
        {this.state.characters.map(character => (
          <CharacterCard
        
            id={character.id}
            image={character.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
