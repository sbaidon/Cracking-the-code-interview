import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const FloatingButton = ({handleDialogToggle}) => (
    <FloatingActionButton  
      className="fixed"
      onTouchTap={handleDialogToggle}>
      <ContentAdd />
    </FloatingActionButton>
    );

export default FloatingButton;