import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    console.log("Constructor running!!!");  
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
    console.log("CDM Running!!")
  }


  render() {
    console.log("Render Running"); 
    return (
      <div className="App" >  
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
