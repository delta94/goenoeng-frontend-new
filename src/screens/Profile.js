import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, AsyncStorage, TouchableOpacity, ActivityIndicator } from 'react-native';
import style from '../Assets/Style'
import { connect } from 'react-redux'
import { getUser } from '../public/redux/actions/user';

const widthWindow = Dimensions.get('window').width
class StoreProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: 'Try Satria',
            image: 'https://res.cloudinary.com/dvyonb6zt/image/upload/v1563542754/Product/ggirl_omijq3.png',
            error: ''
        };
        this.checkLogin()
    }

    checkLogin =async()=>{
        console.warn('asy',await AsyncStorage.getItem('token'))
        if ( !await AsyncStorage.getItem('token') ||await AsyncStorage.getItem('token') ==null ) {
            this.props.navigation.navigate('Login')
        }
    }

    componentWillMount=async()=>{
        // if ( !AsyncStorage.getItem('userToken')) {
        //     props.navigation.navigate('Login')
        // }
        // else{
            // console.warn('token',await AsyncStorage.getItem('token'))
            // BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
            let token = await AsyncStorage.getItem('token')
            this.props.dispatch( getUser( token))
            this.subs = [
                this.props.navigation.addListener('willFocus',async()=>{
                    // this.setState({loading: true})
                    this.checkLogin()
                    let token = await AsyncStorage.getItem('token')
            this.props.dispatch( getUser( token))
            
                }),
            ]
           
 	    // }
    }

    componentWillUnmount(){
        // BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        this.subs.forEach(sub => {
            sub.remove()
        })
    }

    onBackPress = () => {
 
        //Code to display alert message when use click on android device back button.
        Alert.alert(
          ' Exit From App ',
          ' Do you want to exit From App ?',
          [
            { text: 'Yes', onPress: () => BackHandler.exitApp() },
            { text: 'No', onPress: () => console.log('NO Pressed') }
          ],
          { cancelable: false },
        );
     
        // Return true to enable back button over ride.
        return true;
      }

    goback = () => {
        const { navigation } = this.props;
        navigation.goBack()
    }
    goEditProfil = () => {
        this.props.navigation.navigate('EditProfileUser');
    }

    _logOut = async () => {
        // await firebase.database().ref('users/' + Users.id).update({
        //     status: 'offline'
        // })
        await AsyncStorage.clear();
        // Users.email = null
        // Users.name = null
        // Users.id = null
        // Users.status = null
        // Users.role = null
        this.props.navigation.navigate('Auth');
    }
    render() {
        // console.warn(this.props.user);
        
        return (
            <View>
                {
                (!this.props.user.user) ? 
                    <ActivityIndicator/>
                :
                <React.Fragment>
                <View style={style.backgroundUp}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground style={style.imageBox} source={{ uri: this.props.user.image_profil }} />
                        <TouchableOpacity style={style.imageBox2} 
                             onPress={this._logOut}
                        >
                            <ImageBackground  style={{height: 40, width: 40}} source={require('../Assets/Icons/log_out.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.loginBox}>
                    { (this.props.user.user) ? <Text style={style.loginText}>{this.props.user.user.name}</Text> : <ActivityIndicator/>}
                    <View style={style.detailTextBox}>
                        <View style={style.iconBox}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/email.png')} />
                        </View>
                        <Text style={style.textTop}>{this.props.user.user.email}</Text>
                    </View>
                    <View style={style.detailTextBox}>
                        <View style={style.iconBox}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/phone2.png')} />
                        </View>
                        <Text style={style.textTop}>{this.props.user.user.phone}</Text>
                    </View>
                    <View style={style.detailTextBox}>
                        <View style={style.iconBox}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/gender.png')} />
                        </View>
                        <Text style={style.textTop}></Text>
                    </View>
                    <View style={style.detailTextBox}>
                        <View style={[style.iconBox, { height: 70 }]}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/ig.png')} />
                            {/* </ImageBackground> */}
                        </View>
                        <Text style={style.textTop}></Text>
                    </View>
                    <TouchableOpacity 
                        style={[style.buttonAddProduct, {alignSelf: 'center'}]} 
                        onPress={() => this.goback()}>
                        <Text style={[style.loginText, { color: 'white' }]}>Edit</Text>
                    </TouchableOpacity>

                </View>
                </React.Fragment>
                }
                <View style={style.backgroundDown} />
            </View>

        );
    }
}
const mapStateToProps= state => {
	return {
		user: state.user.user,
	}
  }

export default connect(mapStateToProps)(StoreProfile);
