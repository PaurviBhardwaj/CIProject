import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink, Link} from 'react-router';


class login extends React.Component {
   render() {
      return (
         <div>
            <IndexLink to="/App" activeClassName="active"><FlatButton label="login" hoverColor="#006080" labelStyle={{color:'black', fontSize: 20}}/></IndexLink>
<<<<<<< HEAD
            <div className="main" >
                    {this.props.children}
            </div>
=======
            
>>>>>>> c73894185b0ac392320f4e1eb4414f144233243d
         </div>
      );
   }
}


export default login;