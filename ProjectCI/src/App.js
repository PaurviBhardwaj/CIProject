import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
 render() {
   return (
     <div>
               <Header />
             <div>
<<<<<<< HEAD
               

                <div className="main" >
                    {this.props.children}
                </div>

               
            </div>
    );
  }
=======
              
                   {this.props.children}
             
               </div>
               <Footer />
         </div>      
   );
 }
>>>>>>> 78de479bb453a62aa04760008fd6e95754ff7f9b
}

export default App;