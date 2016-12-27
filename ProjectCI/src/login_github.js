import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink, Link} from 'react-router';


class login extends React.Component {
   render() {
      console.log('hi');
      return (
         <div>
            <IndexLink to="/App" activeClassName="active"><FlatButton label="login" hoverColor="#006080" labelStyle={{color:'black', fontSize: 20}}/></IndexLink>
         </div>
      );
   }
}


export default login;