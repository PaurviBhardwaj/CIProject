import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {IndexLink, Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';


const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});

class TestSettings extends Component{
  
  render(){
    const CheckboxIcon=[
      <Checkbox></Checkbox>
    ];
    var text = `# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 0.10
npm install
# Install grunt-cli for running your tests or other tasks
# npm install -g grunt-cli`
    return(
      <Paper>
        <p> 
        <Grid>
          <Row>
            <Col xs={12}>
            <Row center="xs">
              <Col xs={12}><h1>Test Settings</h1><br/></Col>
            </Row>
            </Col>
          </Row>
        </Grid>
        </p>
        <h2>Setup Commands</h2>
        <Paper style={{backgroundColor:'black'}}>
        <MuiThemeProvider muiTheme={muiTheme}>
         <Grid>
          <Row>
            <Col xs={12}>
              <Row start="xs">
                <Col xs={12}>
                  <TextField 
                    multiLine={true}
                    defaultValue={text}
                    fullWidth={true} 
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        </MuiThemeProvider>
        </Paper>
        <Paper zDepth={2} rounded={true}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={12}><h2>Pipeline</h2></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <Row start="xs">
                <Col xsOffset={1} sm={3} xs={8} >
                  <TextField 
                    hintText= "Add to Pipeline" 
                  /></Col><Col  sm={8} xs={3}><FloatingActionButton mini={true} primary={true}>
                  <ContentAdd />
                  </FloatingActionButton>
                </Col>
              </Row>
              <Row start="xs">
                <Col xs={12}>
                <List>
                 <ListItem>
                  <Card>
                    <CardHeader
                      subtitle="Select linting tool"
                      actAsExpander={true}
                      showExpandableButton={false}
                    > 
                    <Toggle label="Linting"></Toggle> </CardHeader>
                    <CardText expandable={true}>
                      <List>
                        <ListItem primaryText="EsLint" leftCheckbox={<Checkbox/>}/>
                        <ListItem primaryText="HTML Lint" leftCheckbox={<Checkbox/>}/>
                      </List>
                    </CardText>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card>
                    <CardHeader
                      subtitle="Suggestion :Keep your files to be tested in a 'TEST' directory."
                      actAsExpander={true}
                      showExpandableButton={false}
                    > 
                    <Toggle label="Test Cases(mocha)"></Toggle> </CardHeader>
                    <CardText expandable={true}>
                      <TextField
                        multiLine={true}
                        floatingLabelText="Mention your file name or regex."
                      /><br/>
                    </CardText>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card>
                    <CardHeader
                      title=""
                      actAsExpander={false}
                    >
                    <Toggle label="Test Coverage"></Toggle>
                    </CardHeader>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card>
                    <CardHeader 
                      title=""
                      actAsExpander={false}
                    >
                    <Toggle label="Tagging"></Toggle>
                    </CardHeader>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card>
                    <CardHeader
                      title=""
                      actAsExpander={false}
                    >
                    <Toggle label="Update Commit Status"></Toggle>
                    </CardHeader>
                  </Card>
                </ListItem>
              </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid> 
      <Grid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={12}>
                <Card>
                  <CardHeader
                    actAsExpander={true}
                    title="TEST"
                  />
                  <CardText expandable={true} >
                    Successful
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
      <br/>
    </Paper>
    <br/>
    <Grid>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12}><IndexLink to="/App/temp" activeClassName="active"><RaisedButton label="Save and go to dashboard" primary={true} ></RaisedButton></IndexLink>
            </Col>
          </Row>
       </Col>
      </Row>
    </Grid>
    </Paper>
    );
  }
}
export default TestSettings;