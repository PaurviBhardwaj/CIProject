import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    console.log("hello");
    return (
             <div>
                <Header />
                <div className="main" >
                    {this.props.children}
                </div>
                <Footer />
            </div>
    );
  }
}

export default App;
