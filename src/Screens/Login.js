import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

export default class Login extends Component {
	state = { 
		email       : '',
		password    : '',
	}

	handleLogin = () => {
		const { email, password } = this.state;
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={[styles.container, {width: '100%'}]}>
					<StatusBar backgroundColor="transparent" barStyle="dark-content" />
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
						style          ={[styles.textInput]}
						onChangeText   ={password => this.setState({ password })}
						value          ={this.state.password}
					/>
					<View style={{padding: 14}}>
						<Text>
							Don't have an account?&nbsp;
							<Text onPress={() => this.props.navigation.navigate('SignUp')} style={styles.textBtn}> 
								SignUp
							</Text>
						</Text>
					</View>
				</View>
				<View style={{width: '100%'}}>
					<TouchableOpacity onPress={this.handleLogin} style={styles.inputBtn}>
						<Text style={{fontWeight: '500', fontSize: 16}}>Log in</Text>
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