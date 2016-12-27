import React from 'react';
import {IndexLink, Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'

const navbar = {
    ul : {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    },
    li : {
      float: 'left',
      color: 'white',
      fontSize: 20
    },
    li2 : {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '5px',
      textDecoration: 'none',
    },
    app: {
      position: 'fixed',
      top:0, 
      left: 0, 
      right: 0
    }
};
export default class Header extends React.Component {
    render() {
        const nav = <div style={navbar}>
                       <ul style={navbar.ul}>
                           
                       </ul>
                    </div>
      return (
            <AppBar style={navbar.app}
              title="Welcome"
              iconElementRight={nav}
            />
      );

    }
}