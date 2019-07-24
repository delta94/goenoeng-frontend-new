import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
// import firebase from 'firebase';
import { TouchableOpacity, Image,AsyncStorage } from 'react-native';
import { View, Text } from 'native-base';
import firebase from 'firebase'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: props.navigation.getParam("name"),
            uid: props.navigation.getParam("userId"),
            myUid: '',
            myName: '',
            myAvatar: '',
            text: '',
            messagesList: []
        }
    }
    componentDidMount = async () => {
        this.setState({
            myUid: 0,
            myName: Users.name,
            myAvatar: 'Users.avatar'
        })

        await firebase.database().ref('messages/').child(0).child(this.state.uid).on('child_added', (val) => {
            this.setState((prevState) => {
                return {
                    messagesList: GiftedChat.append(prevState.messagesList, val.val())
                }
            })
        })
    }


    sendMessage = async () => {
        if (this.state.text.length > 0) {
            let msgId = firebase.database().ref('messages').child(this.state.myUid).child(this.state.uid).push().key;
            let updates = {};
            let message = {
                _id: msgId,
                text: this.state.text,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    _id: this.state.myUid,
                    name: this.state.myName,
                    avatar: this.state.myAvatar
                },
            }
            updates["messages/" + this.state.myUid + '/' + this.state.uid + '/' + msgId] = message;
            updates["messages/" + this.state.uid + '/' + this.state.myUid + '/' + msgId] = message;
            firebase.database().ref().update(updates);
            this.setState({ text: '' })

        }
        else {
            alert('Please type a message first')
        }

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', padding: 10, fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: '#34c759' }}>
                    {this.state.person}
                </Text>
            <GiftedChat
                text={this.state.text}
                messages={this.state.messagesList}
                user={{
                    _id: this.state.myUid
                }}
                onInputTextChanged={(text) => { this.setState({ text: text }) }}
                onSend={this.sendMessage}
            />
            </View>
        );
    }
}