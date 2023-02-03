import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
                <ListItem primary="First Name" secondary={firstName} />
                <ListItem primary="Last Name" secondary={lastName} />
                <ListItem primary="Email" secondary={email} />
                <ListItem primary="Occupation" secondary={occupation} />
                <ListItem primary="City" secondary={city} />
                <ListItem primary="Bio" secondary={bio} />
            </List>
            <br />

            <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}/>

           <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}/> 
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}
const styles={
    button:{
        margin:15
    }
}

export default Confirm;
