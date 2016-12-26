import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink, Link} from 'react-router';


class login extends React.Component {
   render() {
      return (
         <div>
            <IndexLink to="/App" activeClassName="active"><FlatButton label="login" hoverColor="#006080" labelStyle={{color:'black', fontSize: 20}}/></IndexLink>
            <div className="main" >
                    {this.props.children}
            </div>
         </div>
      );
   }
}


export default login;