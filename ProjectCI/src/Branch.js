import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {IndexLink, Link} from 'react-router';

const styles={
	heading:{
		textColor:'black',
		fontSize:'30',
		marginLeft:'300',
		marginTop:'100',
	},
	list:{
		margin:'auto',
		width:400,
	},
	bar:{
		marginLeft:150,
	}
};
class Branch extends Component{
	render(){
		return(
			<div>
			<p style={styles.heading}>Adding branches to your current repository necessary to run CI </p>
			<Paper style={styles.list}><List>
			<ListItem primaryText="master" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
		    <ListItem primaryText="dev" leftCheckbox={<Checkbox checked={true} disabled={true}/>}/>
		    <ListItem primaryText="testing" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
			</List> 
			<IndexLink to="/App/branchpath" activeClassName="active"><RaisedButton label="Ready for CI" primary={true} style={styles.bar}></RaisedButton></IndexLink>
			<br/>
			</Paper>
			</div>
			);
	}
}

export default Branch;