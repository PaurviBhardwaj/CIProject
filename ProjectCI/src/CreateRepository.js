import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink, Link} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class createRepo extends Component {
  
   render() {
      const style = {
        height: 500,
        width: 1100,
        margin: 80,
        textAlign: 'center',
        display: 'inline-block',
      };
      return (
         <div>
            <Paper style={style} zDepth={5} rounded={true}>
            <TextField hintText="Enter Repository Name" floatingLabelText="Repository Name"/><br />
            <TextField hintText="Description" floatingLabelText="Description"/><br />
            </Paper>
         </div>
      );
   }
}


export default createRepo;