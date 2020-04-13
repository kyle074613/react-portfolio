import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={About} />
    </Router>

  );
}

export default App;
