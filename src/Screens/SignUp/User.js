import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View, TouchableOpacity, StatusBar } from 'react-native';

export default class User extends Component {
	state = { 
		email       : '',
		name		: '',
		address		: '',
		password    : '',
	}

	handleSignUp = () => {
	    
  	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={[styles.container, {width: '100%'}]}>
					<StatusBar backgroundColor="#fff" barStyle="dark-content" />
					<TextInput
						placeholder    ="Nama"
						autoCapitalize ="none"
						style          ={[styles.textInput, {marginBottom: 10}]}
						onChangeText   ={name => this.setState({ name })}
						value          ={this.state.name}
					/>
					<TextInput
						placeholder    ="Alamat"
						autoCapitalize ="none"
						style          ={[styles.textInput, {marginBottom: 10}]}
						onChangeText   ={address => this.setState({ address })}
						value          ={this.state.address}
						multiline      ={true}
						numberOfLines  ={3}
					/>
					<TextInput
						placeholder    ="Email"
						autoCapitalize ="none"
						keyboardType   ="email-address"
						style          ={[styles.textInput, {marginBottom: 10}]}
						onChangeText   ={email => this.setState({ email })}
						value          ={this.state.email}
					/>
					<TextInput
						secureTextEntry
						placeholder    ="Kata Sandi"
						autoCapitalize ="none"
						style          ={[styles.textInput, {marginBottom: 10}]}
						onChangeText   ={password => this.setState({ password })}
						value          ={this.state.password}
					/>
					<View style={{padding: 14}}>
						<Text>
							Already have an account?&nbsp; 
							<Text onPress={() => this.props.navigation.navigate('Login')} style={styles.textBtn}> 
								Login
							</Text>
						</Text>
					</View>
				</View>
				<View style={{width: '100%'}}>
					<TouchableOpacity onPress={this.handleSignUp} style={styles.inputBtn}>
						<Text style={{fontWeight: '500', fontSize: 16}}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex          : 1,
		justifyContent: 'center',
		alignItems    : 'center',
	},
	textInput: {
		height         : 50,
		width          : '80%',
		backgroundColor: '#00000010',
		borderRadius   : 4,
		paddingLeft    : 15,
		paddingRight   : 15,
	},
	inputBtn: {
		backgroundColor: '#34c759',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: '100%',
		paddingLeft    : 15,
		paddingRight   : 15,
	},
	textBtn: {
		color   : '#000',
	},
});