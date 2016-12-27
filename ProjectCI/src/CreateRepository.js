import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import {IndexLink, Link} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Dialog from 'material-ui/Dialog';

class createRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1,valueLicense:1};
  }

   handleChange = (event, index, value) => this.setState({value});
   handleChangeLicense = (event, index, valueLicense) => this.setState({valueLicense});

   state = {
    open: false,
    openReadme: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleOpenReadme= () => {
    this.setState({openReadme: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleCloseReadme= () => {
    this.setState({openReadme: false});
  };

   render() {
      const styles = { 
        heading:{
         textAlign:'center'
        },
        paperStyle:{
         height: 600,
         width: 1100,
         margin: 100,
         display: 'inline-block',
        },
        block:{
           marginLeft:320,
           width:500
        },
        button:{
         marginLeft:155
        },
        textField:{
         width:500
        },
        radio:{
         marginTop:20,
         marginBottom:20,
         width:230
        },
        customWidth: {
          width: 300,
          marginLeft:20
        },
        customWidthLicense: {
          width: 300,
          marginLeft:35
        }
      };
      const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const actionsReadme = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleCloseReadme}
      />,
    ];

      return (
            <Paper style={styles.paperStyle} zDepth={5} rounded={true}>
            <div style={styles.block}>
               <h1 style={styles.heading}>CREATE REPOSITORY</h1>
               <h5>A repository contains all the files for your project, including the revision history.</h5>
               <Divider/>
               <TextField icon={<ActionInfo/>} hintText="Enter Repository Name" floatingLabelText="Repository Name" style={styles.textField}/><br />
               <TextField hintText="Description" floatingLabelText="Description (optional)" style={styles.textField}/><br />
                <br/>
                <Divider/>
                     <div style={{display:'flex'}}>
                        <RadioButtonGroup name="privacyAccess" style={{display:'flex'}}>
                        <RadioButton style={styles.radio}
                          value="Public"
                          label="Public"
                        />
                        <RadioButton style={styles.radio}
                          value="Private"
                          label="Private"
                        />
                      </RadioButtonGroup>
                      <IconButton onTouchTap={this.handleOpen}><ActionInfo />< /IconButton>
                      <Dialog
                         title="Choosing Private and Public"
                         actions={actions}
                         modal={false}
                         open={this.state.open}
                         onRequestClose={this.handleClose}
                       ><h2>Public</h2>
                        <p>Anyone can see this repository. You choose who can commit.</p>
                        <h2>Private</h2>
                        <p>You choose who can see and commit to this repository.</p>
                       </Dialog>
                   </div>

                <Divider/>
                <br/>
                <div style={{display:'flex'}}>
                   <Checkbox style={{width:460}} label="Initialize this repository with a README"/>
                   <IconButton onTouchTap={this.handleOpenReadme}><ActionInfo />< /IconButton>
                   <Dialog
                      title="Use of README"
                      actions={actionsReadme}
                      modal={false}
                      open={this.state.openReadme}
                      onRequestClose={this.handleCloseReadme}
                    >This will let you immediately clone the repository to your computer. Skip this step if you’re importing an existing repository.
                    </Dialog>
                </div>

                <div style={{display:'flex'}}>
                <p style={{marginTop:22}}>Add .gitignore</p>
                <DropDownMenu
                   value={this.state.value}
                   onChange={this.handleChange}
                   style={styles.customWidth}
                   autoWidth={false}
                 >
                   <MenuItem value={1} primaryText="None" />
                   <MenuItem value={2} primaryText="Actionscript" />
                   <MenuItem value={3} primaryText="Ada" />
                   <MenuItem value={4} primaryText="Agda" />
                   <MenuItem value={5} primaryText="Android" />
                   <MenuItem value={6} primaryText="AppEngine" />
                   <MenuItem value={7} primaryText="Appcelerator Titanium" />
                   <MenuItem value={8} primaryText="ArchLinux Packages" />
                 </DropDownMenu>
                </div>

                <div style={{display:'flex'}}>
                <p style={{marginTop:22}}>Add license</p>
                <DropDownMenu
                   value={this.state.valueLicense}
                   onChange={this.handleChangeLicense}
                   style={styles.customWidthLicense}
                   autoWidth={false}
                 >
                   <MenuItem value={1} primaryText="None" />
                   <MenuItem value={2} primaryText="Apache License 2.0" />
                   <MenuItem value={3} primaryText="GNU General Public License " />
                   <MenuItem value={4} primaryText="MIT" />
                 </DropDownMenu>
                </div>
                <br/>
               <Link to="/App/branch" activeClassName="active"><RaisedButton label="Create Repository" primary={true} style={styles.button} /></Link>
                </div>
            </Paper>
         
      );
   }
}


export default createRepo;