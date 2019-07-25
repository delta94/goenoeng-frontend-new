import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions, FlatList, Image,ImageBackground } from 'react-native';
import styles from '../Assets/Styles';
import Styles from '../Assets/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE = -7.7584436;
const LONGITUDE = 110.3759749;
const LATITUDE_DELTA = 0.0103;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class Maps extends Component {
    constructor(props) {
        super(props)
        const { navigation } = this.props;
        const target = navigation.getParam('target');

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            store: (navigation.getParam('store') != null) ? navigation.getParam('store') : [],
            users: [],
        }
    }
    static navigationOptions = {
        header: null
    }
    async componentDidMount() {
        this.getLocation
    }
    getLocation = async () =>
        await Geolocation.getCurrentPosition(
            async (position) => {
                await this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude })
            },
            (error) => {
                Alert.alert(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemMap} onPress={() => {
                let LatitudeDelta = LATITUDE_DELTA - 0.003
                let LongitudeDelta = LatitudeDelta * ASPECT_RATIO
                _mapView.animateToRegion({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    latitudeDelta: LatitudeDelta,
                    longitudeDelta: LongitudeDelta,
                })
            }}>
                <Image source={{ uri: item.photo }} style={{ width: '100%', height: '80%' }} />
                <Text numberOfLines={1} style={{ textAlign: 'center' }}>{item.name}</Text>
                {(item.status) ?
                    (<Text style={[styles.textStatusMap, { color: '#11f515' }]}>Online</Text>) :
                    (<Text style={[styles.textStatusMap, { color: '#f00514' }]}>Offline</Text>)
                }
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.containerMap}>
                <MapView
                    ref={(mapView) => { _mapView = mapView }}
                    style={{ flex: 1, width: width, }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta
                    }}>
                    <Marker coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }} title='YOU' pinColor='green' />
                    <Marker coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }} title='YOU' pinColor='green' />
                    {(this.state.store.length != 0) ? this.state.users.map(user => (
                        <Marker coordinate={{
                            latitude: user.latitude,
                            longitude: user.longitude
                        }}>
                            <MapView.Callout tooltip={false}>
                                <View style={styles.viewMap}>
                                    <Image source={{ uri: user.photo }} style={styles.imgMap} />
                                    <View style={{ width: '20%' }}>
                                        <Text>Name </Text>
                                        <Text>Email</Text>
                                        <Text>Telp </Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text numberOfLines={1}>:{user.name}</Text>
                                        <Text numberOfLines={1}>:{user.email}</Text>
                                        <Text>:{user.telp}</Text>
                                    </View>
                                </View>
                            </MapView.Callout>
                        </Marker>
                    )) : <View />
                    }
                </MapView>
                <View style={styles.buttonMap} >
                    <TouchableOpacity style={Styles.iconBox3}
                        onPress={() => this.props.navigation.goBack()}>
                        <ImageBackground style={{ height: 44, width: 44 }}
                            source={require('../Assets/Icons/back.png')} />
                    </TouchableOpacity>
            </View>
            </View >
        )
    }
}