import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const AppDrawer = ({handleClose, open, onRequestChange}) => {
  return (
      <Drawer
        docked={false}
        width={200}
        open={open}
        onRequestChange={onRequestChange}>
        <MenuItem onTouchTap={handleClose}>Menu Item</MenuItem>
        <MenuItem onTouchTap={handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    )
}

export default AppDrawer;