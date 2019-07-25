import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView,ScrollView, AsyncStorage, Image, Text, TextInput, SafeAreaView, View, TouchableOpacity, StatusBar } from 'react-native';
// import firebase from 'firebase'
import { withNavigation } from 'react-navigation';
import { Picker, Form, Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, FooterTab } from 'native-base';
// import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { registerUser } from '../public/redux/actions/user';

class User extends Component {
	state = {
		email: null,
		name: null,
		address: null,
		password: null,
		passwordConfirm: null,
		phone: null,
		level: 'user'
		// gender: 'Pria',
		// filePath: {},
	}

	// chooseFile = () => {
	// 	let options = {
	// 		title: 'Pilih Gambar',
	// 		storageOptions: {
	// 			skipBackup: true,
	// 			path: 'images',
	// 		},
	// 	};
	// 	ImagePicker.showImagePicker(options, response => {
	// 		if (response.didCancel) {
	// 			alert('Batal Pilih Gambar');
	// 		} else if (response.error) {
	// 			alert('Pilih Gambar Error: ' + response.error);
	// 		} else {
	// 			let source = response;
	// 			this.setState({
	// 				filePath: source,
	// 			});
	// 		}
	// 	});
	// };

	// onValueChange(value) {
	// 	this.setState({
	// 		gender: value
	// 	});
	// }

	handleSignUp = () => {
		// firebase.auth()
		// 	.createUserWithEmailAndPassword(this.state.email, this.state.password)
		// 	.then(async (response) => {
		// 		await AsyncStorage.setItem('userId', response.user.uid)
		// 		// Users.id = await AsyncStorage.getItem('userId')
		// 		await AsyncStorage.setItem('userPassword', this.state.password)
		// 		let userf = firebase.auth().currentUser;
		// 		userf.updateProfile({ displayName: this.state.name })
		// 		firebase.database().ref('users/' + response.user.uid).set({
		// 			name: this.state.name,
		// 			email: this.state.email,
		// 			role: 'customer',
		// 			status: 'offline'
		// 		})

		// Users.email = this.state.email
		// Users.name = this.state.name
		// Users.role = 'customer'
		// Users.status = 'offline'

		// 	alert("User " + this.state.name + " berhasil dibuat. otomatis login.")
		// 	this.props.navigation.navigate('App')
		// }, function (error) {
		// 	alert("User gagal dibuat. Error: " + error.message);
		// })
		if (this.state.name == null) {
			alert('nama tidak boleh kosong')
		}
		else if (this.state.address == null) {
			alert('alamat tidak boleh kosong')
		}
		else if (this.state.email == null) {
			alert('email tidak boleh kosong')
		}
		else if (this.state.phone == null) {
			alert('nomor telepon tidak boleh kosong')
		}
		else if (this.state.password == null) {
			alert('password tidak boleh kosong')
		}
		else if (this.state.name.length < 5) {
			alert('nama minimal 5 karakter')
		}
		else if (this.state.email.length < 5) {
			alert('email minimal 5 karakter')
		}
		else if (this.state.phone.length < 10) {
			alert('nomor telepon minimal 10 karakter')
		}
		else if (this.state.password.length < 6) {
			alert('password minimal 6 karakter')
		}
		else if (this.state.password != this.state.passwordConfirm) {
			alert('password tidak sama dengan konfirmasi')
		}
		else {

			const { email, password, name, address, phone, level } = this.state;
			this.props.dispatch(registerUser(email, password, name, address, phone, level))
			.then(() => {
				this.props.navigation.navigate('Home')
			}, function (error) {
				alert("Email Sudah Terdaftar / Format Email Tidak Benar");
			})
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={[styles.container, { width: '100%' }]}>
					<StatusBar backgroundColor="#fff" barStyle="dark-content" />
					{/* <ScrollView> */}
					{/* <Image
						source={{ uri: this.state.filePath.uri }}
						style={{ width: 250, alignSelf: 'center', marginBottom: '5%', marginTop: '5%', borderWidth: 2, borderColor: '#34c759', height: 250 }}
					/>
					<Button
						style={{ borderWidth: 2, borderColor: '#34c759', width: '90%', backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center', marginBottom:10 }}
						onPress={this.chooseFile.bind(this)}>
						<Text >Pilih Gambar Profil</Text>
					</Button> */}
					{/* <Form style={{alignSelf:'center', width:'100%', alignItems:'center'}}> */}
					{/* <KeyboardAvoidingView> */}
					<ScrollView style={{width:'100%', marginTop:'20%'}}>
					<View style={[styles.container, { width: '100%' }]}>
						<TextInput
						placeholder="Nama"
						autoCapitalize="none"
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={name => this.setState({ name })}
						value={this.state.name}
					/>
					<TextInput
						placeholder="Alamat"
						autoCapitalize="none"
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={address => this.setState({ address })}
						value={this.state.address}
						multiline={true}
						numberOfLines={3}
					/>
					{/* <Picker
						mode="dropdown"
						style={[styles.textInput, { marginBottom: 10 }]}
						iosIcon={<Icon style={{ color: 'white' }} name="md-arrow-dropdown" />}
						placeholder={"Pilih Jenis Kelamin"}
						placeholderStyle={{ color: "grey" }}
						placeholderIconColor="grey"
						// style={{ width: undefined }}
						selectedValue={this.state.gender}
						onValueChange={this.onValueChange.bind(this)}
					>
						<Picker.Item label="Pria" color='grey' value="Pria" />
						<Picker.Item label="Wanita" color='grey' value="Wanita" />
					</Picker> */}
					<TextInput
						placeholder="Email"
						autoCapitalize="none"
						keyboardType="email-address"
						minLength={3}
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
					<TextInput
						placeholder="No Telepon"
						autoCapitalize="none"
						minLength={10}
						keyboardType={'numeric'}
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={phone => this.setState({ phone })}
						value={this.state.phone}
					/>
					<TextInput
						secureTextEntry
						placeholder="Kata Sandi"
						autoCapitalize="none"
						minLength={6}
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
					/>
					<TextInput
						secureTextEntry
						placeholder="Konfirmasi Kata Sandi"
						autoCapitalize="none"
						minLength={6}
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
						value={this.state.passwordConfirm}
					/>
					</View>
					</ScrollView>
					{/* </KeyboardAvoidingView> */}
					{/* </Form> */}
				</View>
				<View style={{ padding: 14, width:'100%',alignItems:'center', alignSelf: 'center', backgroundColor:'white' }}>
					<Text>
						Already have an account?&nbsp;
							<Text onPress={() => this.props.navigation.navigate('Login')} style={styles.textBtn}>
							Login
							</Text>
					</Text>
				</View>
				<View style={{ width: '100%' }}>
					<TouchableOpacity onPress={this.handleSignUp} style={styles.inputBtn}>
						<Text style={{ fontWeight: '500', color: 'white', fontSize: 16 }}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		height: 50,
		width: '80%',
		backgroundColor: '#00000010',
		borderRadius: 4,
		paddingLeft: 15,
		paddingRight: 15,
	},
	inputBtn: {
		backgroundColor: '#34c759',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: '100%',
		paddingLeft: 15,
		paddingRight: 15,
	},
	textBtn: {
		color: '#000',
	},
});

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}
export default withNavigation(connect(mapStateToProps)(User))