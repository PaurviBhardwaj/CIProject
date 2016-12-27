import React,{Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {IndexLink, Link} from 'react-router';

class home extends Component {
  render() {

    return (
    	<div>
      <h1 style={{marginTop:250}}>hi</h1>
      <IndexLink to="/App/create" activeClassName="active"><FlatButton label="Create" hoverColor="#006080" labelStyle={{color:'black', fontSize: 20}}/></IndexLink>
            </div>
      );
  }
}

export default home;




