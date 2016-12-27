import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {IndexIndexLink, IndexLink} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/logo.jpg'
import cardImg from '../images/cardImg.png'
import gitLogo from '../images/gitLogo.png'
import './App.css'


//For Github IndexLink
const stylesGitIndexLink = {
  button: {
    margin: 12,
    float:'right',
  },

  card:{
    width:700,
    margin:'auto',
    marginBottom:100,
    marginTop:10,
    

  },

  cardHeader:{
    textColor:'black',
  },

  cardActions:{
    flex:4,
    textAlign:'center',
  },

  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};




class login extends React.Component {



   render() {
      
      return (
      	<div>
      		<div>
      			<Toolbar>
      			
        			<ToolbarGroup firstChild={true}>
                <img src={logo} className="App-logo" alt="logo" />
                <ToolbarTitle style={{marginLeft:5}} text='Keep Integrating'  />
          		</ToolbarGroup>

        		<ToolbarGroup>
                <RaisedButton
                  href="#"
                  label="Contact Us"
                  secondary={true}
                  style={stylesGitIndexLink.button}
                  icon={<FontIcon className="muidocs-icon-custom-github" />}
                />
		          	
		          	<FontIcon className="muidocs-icon-custom-sort" />
		          	<ToolbarSeparator />
		          	<RaisedButton label="Create Account" primary={true} />
		            <IconMenu
		            iconButtonElement={
		              	<IconButton touch={true}>
		                <NavigationExpandMoreIcon />
		              	</IconButton>
		            	}
		          	>
            			<MenuItem primaryText="Features" />
           			<MenuItem primaryText="Blogs" />
            		</IconMenu>
        		</ToolbarGroup>
        		</Toolbar>
      		</div>

          
          <div>
          <Card style={stylesGitIndexLink.card}>
          <CardHeader style={stylesGitIndexLink.cardHeader}
            title="KI"
            subtitle="a CI platform you have been dreaming off"
            
          />
          <CardMedia

            overlay={<CardTitle title="Keep Integrating" subtitle="..with ease" />}
          >
            <img style={{height:500, width:370}} src={cardImg} />
          </CardMedia>
          
          <CardActions style={stylesGitIndexLink.cardActions} >
            <IndexLink to="/App" activeClassName="active" ><FlatButton secondary={true} hoverColor='#D1C4E9' label="Login With Github" /></IndexLink>
          </CardActions>
        </Card>
        </div>

	      	<div>
        		<Footer />
        	</div>
        </div>
      );
   }
}


export default login;