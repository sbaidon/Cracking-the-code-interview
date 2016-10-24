import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const InputDialog = ({dialogOpen, handleDialogToggle, writeCards}) => {
  const actions = [
          <FlatButton
            label="Save"
            primary={true}
            keyboardFocused={true}
            onTouchTap={writeCards}
          />,
  ];
  return (
    <div>
          <Dialog
            title="Add a new card"
            actions={actions}
            modal={false}
            open={dialogOpen}
            onRequestClose={handleDialogToggle}
          >

            {['category', 'example', 'language', 'link', 'text'].map((item, index) => {
              return <TextField
                  id = {item}
                  hintText={item}
                  key={index}
                />
            })}
            

          </Dialog>
    </div>
    )
  }

export default InputDialog;