import React from 'react';
import {IndexLink, Link} from 'react-router';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import ActionBugReport from 'material-ui/svg-icons/action/bug-report'
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
                         <li style={navbar.li}><IndexLink style={navbar.li2} to="/" activeClassName="active"><FlatButton label="Home" hoverColor="#006080" labelStyle={{color:'white', fontSize: 20}}/><FlatButton label="Logout" hoverColor="#006080" labelStyle={{color:'white', fontSize: 20}}/></IndexLink></li>
                       </ul>
                    </div>
      return (
            <AppBar style={navbar.app}
              title="Welcome user"
               iconElementLeft={<IconButton><ActionBugReport /></IconButton>}
              iconElementRight={nav}
            />
      );

    }
}