	import React, { Component } from 'react';
	import Paper from 'material-ui/Paper';
	import { List, ListItem } from 'material-ui/List';
	import Checkbox from 'material-ui/Checkbox';
	import RaisedButton from 'material-ui/RaisedButton';
	import { IndexLink, Link } from 'react-router';
	import TextField from 'material-ui/TextField';
	import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

	class Branch extends Component{
		render(){
			return(
				<Paper>
					<TextField
      			hintText="No.of teams"
      			floatingLabelText="Enter the number of teams working in this project."
    			/><br />
					<h4>Adding branches to your current repository necessary to run CI </h4>
					
						<List>
							<ListItem primaryText="master(protected)" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
				  		<ListItem primaryText="dev" leftCheckbox={<Checkbox checked={true} disabled={true}/>}/>
				  		<ListItem primaryText="testing" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
						</List> 
						<IndexLink to="/App/branchpath" activeClassName="active"><RaisedButton label="Ready for CI" primary={true}></RaisedButton></IndexLink>
						<br/>
					</Paper>
				
				);
			}
		}

export default Branch;