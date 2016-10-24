import React, { Component } from 'react';
import './styles/Home.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';
import {languages, categories} from '../data';

import Navbar from './Navbar';
import AppDrawer from './AppDrawer';
import CardWithAvatar from './CardWithAvatar';
import FloatingButton from './FloatingButton';
import InputDialog from './InputDialog';

class Home extends Component {

  constructor(props) {
    super(props);
    const firebaseConfig = {
        apiKey: "AIzaSyBbHlUCtO-V5NbPHTuoM3cISwdk90COGW8",
        authDomain: "study-c84dd.firebaseapp.com",
        databaseURL: "https://study-c84dd.firebaseio.com",
        storageBucket: "study-c84dd.appspot.com",
        messagingSenderId: "295023371187"
    };
    firebase.initializeApp(firebaseConfig);

    this.state =  {
      open: false, 
      user: null,
      cards: [],
      dialogOpen: false
    };
  }

  componentDidMount() {
    this.fetchCards();
    firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          user: user,
          open: false
        });
    });
  }

  fetchCards() {
    firebase.database().ref('cards').on('value' , (snapshot) => {
      this.setState({
        cards: this.getValues(snapshot.val())
      });
    });
  }

  getValues(objects) {
    return Object.keys(objects).map((key, index) => {
      return objects[key];
    });
  }

  handleLogin() {
    if(!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.fetchCards();
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      firebase.auth().signOut()
    }
  }

  writeCards = () => {
    this.setState({dialogOpen: false});
    const card = {};
    ['category', 'example', 'language', 'link', 'text'].forEach((item) => {
      card[item] = document.getElementById(item).value;
    })
    firebase.database().ref('cards').push(card);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleDialogToggle = () => this.setState({dialogOpen: !this.state.dialogOpen});

  onRequestChange = (open) => this.setState({open});

  render() {
    return (
      <MuiThemeProvider>
      <div className="Main-Container">
      <Navbar 
        handleToggle={this.handleToggle}
        handleLogin={this.handleLogin}
        user={this.state.user}
        className="Navbar"
        />
        <AppDrawer
          handleClose={this.handleClose}
          open={this.state.open}
          onRequestChange={this.onRequestChange}
        />


        {this.state.cards.map((item, index) => {
          const avatar = {
            image: languages[item.language].image,
            title: item.language,
            subtitle: item.link
          }

          return (<CardWithAvatar
            text={item.text}
            avatar={avatar}
            title={item.category}
            key={index}
            subtitle={item.example}
          />
          );
        })}

        <FloatingButton
          handleDialogToggle={this.handleDialogToggle}
          />
        <InputDialog 
        dialogOpen={this.state.dialogOpen}
        writeCards={this.writeCards}
        handleDialogToggle={this.handleDialogToggle}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
