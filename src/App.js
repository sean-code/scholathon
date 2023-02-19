import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/setup/Navbar';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store';
import Footer from './components/setup/FooterPart';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;
