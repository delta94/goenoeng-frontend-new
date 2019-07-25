import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View, TouchableOpacity, StatusBar, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation, { getCurrentPosition } from 'react-native-geolocation-service';

export default class Mitra extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			name: '',
			address: '',
			password: '',
			longitude: 0,
			latitude: 0,
			error: '',
			permission: false,
		}
	}

	handleSignUp = () => {

	}

	async componentWillMount() {
		this.requestMaps()
	}

	requestMaps = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				this.setState({ permission: true })
				this.getLocation()
				console.log('You can use Maps');
			} else {
				alert('Maps tidak akan berfungsi jika anda tidak memberi izin lokasi')
			}
		} catch (err) {
			console.warn(err);
		}
	}

	getLocation = async () => {
		if (this.permission = true) {
			await Geolocation.getCurrentPosition(
				async (position) => {
					await this.setState({
						longitude: position.coords.longitude,
						latitude: position.coords.latitude
					})
				},
				(error) => {
					console.warn(error.code, error.message);
				},
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
			)
		}
	}
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={[styles.container, { width: '100%' }]}>
					<StatusBar backgroundColor="#fff" barStyle="dark-content" />
					<TextInput
						placeholder="Nama Toko"
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
					<TextInput
						placeholder="Email"
						autoCapitalize="none"
						keyboardType="email-address"
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
					<TextInput
						secureTextEntry
						placeholder="Kata Sandi"
						autoCapitalize="none"
						style={[styles.textInput, { marginBottom: 10 }]}
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
					/>
					<MapView
						ref={map => this.map = map}
						provider={PROVIDER_GOOGLE}
						style={styles.map}
						region={{
							latitude: this.state.latitude,
							longitude: this.state.longitude,
							latitudeDelta: 0.02864195044303443,
							longitudeDelta: 0.020142817690068,
						}}
					>
						<Marker
							coordinate={{
								latitude: this.state.latitude,
								longitude: this.state.longitude,
							}}
							title={'Toko Saya'}
							draggable
							onDragEnd={(e) => {
								this.setState({
									longitude: e.nativeEvent.coordinate.longitude,
									latitude: e.nativeEvent.coordinate.latitude
								})
							}}

						/>
					</MapView>
					<View style={{ padding: 14 }}>
						<Text>
							Already have an account?&nbsp;
							<Text onPress={() => this.props.navigation.navigate('Login')} style={styles.textBtn}>
								Login
							</Text>
						</Text>
					</View>
				</View>
				<View style={{ width: '100%' }}>
					<TouchableOpacity onPress={this.handleSignUp} style={styles.inputBtn}>
						<Text style={{ fontWeight: '500', fontSize: 16 }}>Sign Up</Text>
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
	map: {
		height: 150,
		width: '80%',
		backgroundColor: '#00000010',
		borderRadius: 10,
		paddingLeft: 15,
		paddingRight: 15,
		marginBottom: 10,
	}
});