import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'


class App extends Component {
  render() {
    console.log("hello");
    return (
             <div>
               

                <div className="main" >
                    {this.props.children}
                </div>

               
            </div>
    );
  }
}

export default App;
