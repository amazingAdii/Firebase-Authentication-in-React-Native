import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{

    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAoluuyefLqPZxWtOsA8uOX2xBFa8TcZDU",
            authDomain: "authentication-reactnati-106dd.firebaseapp.com",
            databaseURL: "https://authentication-reactnati-106dd.firebaseio.com",
            projectId: "authentication-reactnati-106dd",
            storageBucket: "authentication-reactnati-106dd.appspot.com",
            messagingSenderId: "1046302013743"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            }else{
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case false: return  <LoginForm />;
            case true: return (
                    <CardSection>
                        <Button onPress={ () => firebase.auth().signOut()}>
                        LogOut
                        </Button>
                    </CardSection>
            );
            default: return <CardSection><Spinner size="large"/></CardSection>;
        }

    }

    render () {
        return (
                <View >
                    <Header headerText="Authentication"/>
                    {this.renderContent()}
                </View>
        );
    }
}


export default App;
