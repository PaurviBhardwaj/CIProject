import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FullHeart from 'react-icons/lib/ti/heart-full-outline';
import Error from 'react-icons/lib/md/report';
import Check from 'react-icons/lib/fa/check';
import Happy from 'react-icons/lib/fa/smile-o';
import Sad from 'react-icons/lib/fa/frown-o';
import Badge from 'material-ui/Badge';
import CircularProgress from 'material-ui/CircularProgress';
import Setting from 'react-icons/lib/fa/cog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'
class BuildReport extends Component {
  render() {
    return (

             <div>
                <BuildList/>
            </div>
    );
  }
}
class ReportHead extends Component
{
  render()
  {
    return(<div className="head">
        
        <h1>Build Report</h1>

       <Link to="/App/test" activeClassName="active"><RaisedButton label="Test Settings" style={{float:'right'}} primary={true} /></Link>
     
      </div>
      );
  }
}

class ReportDialog extends Component 
{
  render()
  {
    return(<div className="dialog">
       <Paper className="paper" zDepth={5}>
       Do you want to re-run last build?{'    '}
       <RaisedButton label="Yes" />
       </Paper>
      </div>
      );
  }  
}

class BuildList extends Component 
{
  render()
  {

    return(<div>
        <ReportHead/>
        <ReportDialog/>
        <div className="listbox">
       <Table >
    <TableHeader displaySelectAll={false}
            adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Build ID</TableHeaderColumn>
        <TableHeaderColumn>Build Date</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>Error</TableHeaderColumn>
        <TableHeaderColumn>Warning</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody stripedRows showRowHover={true} displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>1232435</TableRowColumn>
        <TableRowColumn>2/12/2016</TableRowColumn>
        <TableRowColumn><CircularProgress size={30}/></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>1238345</TableRowColumn>
        <TableRowColumn>26/12/2016</TableRowColumn>
        <TableRowColumn>
          <FullHeart size={30} color='limegreen'/>
        </TableRowColumn>
        <TableRowColumn><Check size={30} color='limegreen'/></TableRowColumn>
        <TableRowColumn><Happy size={30} color='limegreen'/></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2324324</TableRowColumn>
        <TableRowColumn>25/12/2016</TableRowColumn>
        <TableRowColumn><FullHeart size={30} color='limegreen'/></TableRowColumn>
        <TableRowColumn> <Check size={30} color='limegreen'/></TableRowColumn>
        <TableRowColumn><Happy size={30} color='limegreen'/></TableRowColumn>
      </TableRow>
      <TableRow>
       <TableRowColumn>235674</TableRowColumn>
        <TableRowColumn>11/12/2016</TableRowColumn>
        <TableRowColumn><FullHeart size={30} color='red'/></TableRowColumn>
        <TableRowColumn> <Badge badgeContent={4} 
        badgeStyle={{padding:0.8}} primary={true}>
        <Error size={30} color='red'/></Badge></TableRowColumn>
        <TableRowColumn><Sad size={30} color='red'/></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>454556</TableRowColumn>
        <TableRowColumn>25/12/2016</TableRowColumn>
        <TableRowColumn><FullHeart size={30} color='limegreen'/></TableRowColumn>
         <TableRowColumn> <Badge badgeContent={1} 
        badgeStyle={{padding:0.8}} primary={true}>
        <Error size={30} color='red'/></Badge></TableRowColumn>
        <TableRowColumn><Happy size={30} color='limegreen'/></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
    </div>
    </div>
      );
  }
  
}
export default BuildReport;
