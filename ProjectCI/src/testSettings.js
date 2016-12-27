import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {IndexLink, Link} from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

const styles= {
	style:{
	  width: 960,
	  margin: 20,
	  textAlign: 'center',
	  margin: 'auto',
  },
  heading:{
  	paddingTop:'80',
  	textAlign:'center',
  	fontSize :'46px',
  	margin:'auto',
  },
  setupList: {
  	width:'960',
  	marginLeft:'272',
  	backgroundColor:'black',
  	textColor:'white',
    },
  list: {
  	textAlign:'left',
  },
  click:{
  	textAlign:'center',
  	marginLeft:'100',
  },
  checklist:{
  	textAlign:'center',
  	color:'black',
  	fontSize:'30px',
  },
  bar:{
  	marginBottom:'80',
  	marginLeft:'630',
  },
  box:{
  	paddingLeft:'280',
  	fontSize:'30',
  	margin:'0',
  },
  add:{
  	marginLeft:'750',
  }

};

class TestSettings extends Component{
	render(){
		var text = `# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 0.10
npm install
# Install grunt-cli for running your tests or other tasks
# npm install -g grunt-cli`
 
		return(

			<div>
			<p style={styles.heading}>Test Settings</p><br/>
				<div>
					<p style={styles.box}>Setup Commands</p>
			<TextField style={styles.setupList}
			multiLine={true}
			defaultValue={text} /><br/>
			</div>
      <Paper style={styles.style} zDepth={2} rounded={true}>
      <p style={styles.checklist}>
			Pipeline
			</p>
			<FlatButton label="+ Add to Pipeline" primary={true} style={styles.add}/>
			<List style={styles.list}>
				<ListItem primaryText="Linting" leftCheckbox={<Checkbox />}/>
		        <ListItem primaryText="Test Cases" leftCheckbox={<Checkbox />} />
		        <ListItem primaryText="Test Coverage" leftCheckbox={<Checkbox />} />
		        <ListItem primaryText="Tagging" leftCheckbox={<Checkbox />} />
		        <ListItem primaryText="Update Commit Status" leftCheckbox={<Checkbox />} />
		        <ListItem primaryText="Test Cases" leftCheckbox={<Checkbox />} />
      </List>
	<Card >
    <CardHeader style={styles.click}
      title="TEST"
      actAsExpander={true}/>
     <CardText expandable={true} >
      Successful
    </CardText>
      </Card>
			</Paper>
			<br/>
			<IndexLink to="/App/temp" activeClassName="active"><RaisedButton label="Save and go to dashboard" primary={true} style={styles.bar}></RaisedButton></IndexLink>
			</div>
			);
	}

}
export default TestSettings;