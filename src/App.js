import './App.css';
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // Life cycle method
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users}))
  }

  handler = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){

    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeHolder='Search Monster' handler={this.handler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
