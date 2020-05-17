import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      {id: '77sdd', name: "Max", age: 28},
      {id: '45sdda',  name: "Manu", age: 26},
      {id: '454asd', name: "Stephanie", age:32}
    ],
    otherState: "other state",
    showPersons: false
  }

  deletePersonHandler = (person) => {
    // const persons = this.state.persons; GETS A REFERENCE TO ORIGINAL ARRAY
    // const persons = this.state.persons.slice(); OR USE SPREAD OPERATOR
    const persons = [...this.state.persons]

    persons.splice(person, 1);
    this.setState({
      persons: persons
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id == id
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  //This syntax ensures that the this keyword used inside method always points to the class instance.
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style ={
      font : 'inherit',
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      )
    }
    return (
      <div className="App">
        <h1>Hi, I am a react App! </h1>
        <p>It is really working!! </p>

        <button style={style} 
          onClick={this.togglePersonsHandler}>Toggle Person List</button>

        {persons}
      </div>
    );
  }
}

export default App;
