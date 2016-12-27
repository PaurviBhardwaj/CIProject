import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import SvgIcon from 'material-ui/SvgIcon';
import ActionInfo from 'material-ui/svg-icons/action/info';
import './App.css';
import AlarmOff from 'react-icons/lib/md/alarm-off';
import AlarmOn from 'react-icons/lib/md/alarm-on';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {IndexLink, Link} from 'react-router';
import Icon from 'react-icon-base';
import {Tabs, Tab} from 'material-ui/Tabs';
import Tooltip from 'rc-tooltip'
const Plusicon = () => (
    <Icon viewBox="0 0 40 40">
      <g><path d="m35.9 16.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-9.3v9.2q0 0.9-0.6 1.6t-1.5 0.6h-4.3q-0.9 0-1.5-0.6t-0.7-1.6v-9.2h-9.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h9.3v-9.3q0-0.9 0.7-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5v9.3h9.3q0.9 0 1.5 0.6t0.6 1.5z"/></g>
    </Icon>
);
const Configicon = () => (
  <SvgIcon >
    <g><path d="m14.9 10.7q-1.4 2.1-3.1 6.1-0.5-1-0.8-1.6t-0.9-1.4-1.2-1.3-1.4-0.7-1.8-0.4h-5q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h5q5.6 0 9.2 5z m25.1 17.9q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3q-0.7 0-1.9 0t-1.8 0.1-1.6-0.1-1.6-0.1-1.4-0.2-1.4-0.4-1.3-0.7-1.3-0.8-1.3-1.2-1.2-1.6q1.3-2.1 3-6.1 0.5 1 0.8 1.6t1 1.4 1.1 1.3 1.4 0.8 1.8 0.3h5.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.2l7.1 7.2q0.2 0.2 0.2 0.5z m0-20q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3h-5.7q-1.1 0-1.9 0.4t-1.6 1-1.1 1.3-1 1.8q-0.7 1.4-1.7 3.8-0.7 1.5-1.2 2.5t-1.2 2.3-1.4 2.2-1.6 1.9-2.1 1.5-2.3 1-2.9 0.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h5q1.1 0 2-0.3t1.5-1 1.1-1.4 1-1.7q0.8-1.4 1.8-3.8 0.6-1.5 1.1-2.5t1.2-2.4 1.4-2.2 1.7-1.9 2-1.5 2.4-0.9 2.8-0.4h5.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.2l7.1 7.2q0.2 0.2 0.2 0.5z"/></g>
  </SvgIcon>
);
const EditIcon = () => (
  <SvgIcon >
    <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z" />
  </SvgIcon>
);
const styles={
PaperStyle:{
	display:'inline-block',
	marginTop:50,
	margin:'auto',
},
FloatStyle:{
	position:'fixed',
	bottom:100,
	right:50,
	
}
};
const tableData = [
  {
    Reponame: 'Movie Search',
    status:<AlarmOn data-tip='success' color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'D3',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Movie App',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample repo',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   },
    {
    Reponame: 'Javascript',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample repo',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   }
];
const tableData1 = [
  {
    Reponame: 'Movie React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Angular',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Application',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
   {
    Reponame: 'Javascript',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample repo',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   },
  {
    Reponame: 'JQuery',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample Data',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Bootstrap',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'HTML',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   }
];
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Configure',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  render() {

    return (<div className='WholeContent' style={{marginBottom:100}}>
    	<h2>List of Repositories</h2>
    	<Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="configured" value="Configure" >
          <div>
          <Paper className='mainItems' style={styles.PaperStyle}>
		<Table>
			<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	           		<TableRow>
	           	<TableHeaderColumn><b>Repository</b></TableHeaderColumn>
                  <TableHeaderColumn><b>Status</b></TableHeaderColumn>
	              <TableHeaderColumn><b>Last Fail</b></TableHeaderColumn>
	              <TableHeaderColumn><b>Last Pass</b></TableHeaderColumn>
	            </TableRow>
          	</TableHeader>
    		<TableBody  displayRowCheckbox={false}>
      		{tableData.map( (row, index) => (
      			 <TableRow key={index} selected={row.selected}>
                <TableRowColumn><Link to="/App/Build" style={{textDecoration:'none',color:'blue',fontSize:20}} activeClassName="active">{row.Reponame}</Link></TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.lastfail}</TableRowColumn>
                <TableRowColumn>{row.lastpass}</TableRowColumn>
              </TableRow>
            ))}
	 	    </TableBody>
  		</Table>
   	</Paper>
           </div>
        </Tab>
        <Tab label="Not configured" value="Not configured">
          <div>
            <Paper className='mainItems' style={styles.PaperStyle}>
		<Table>
			<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	            <TableRow>
	              <TableHeaderColumn ><b>Repository</b></TableHeaderColumn>
	              <TableHeaderColumn ><b>Status</b></TableHeaderColumn>
	              <TableHeaderColumn ><b>Last Fail</b></TableHeaderColumn>
	              <TableHeaderColumn ><b>Last Pass</b></TableHeaderColumn>
	            </TableRow>
          	</TableHeader>
    		<TableBody  displayRowCheckbox={false}>
      		{tableData1.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn><Link to="/App/Build"  style={{textDecoration:'none',color:'blue',fontSize:20}} activeClassName="active">{row.Reponame}</Link></TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.lastfail}</TableRowColumn>
                <TableRowColumn>{row.lastpass}</TableRowColumn>
              </TableRow>
              ))}
	 	    </TableBody>
  		</Table>
   	</Paper>
          </div>
        </Tab>
      </Tabs>
    
	<IndexLink to="/App/create" activeClassName="active"><FloatingActionButton style={styles.FloatStyle}><ContentAdd /></FloatingActionButton></IndexLink>
	</div>)

  }
}

export default Home;




