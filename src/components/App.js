import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from "./CreateLink"


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CreateLink />
      <LinkList />
      </React.Fragment>
    );
  }
}

export default App;
