import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import style from '../Assets/Style'
import { connect } from 'react-redux'

const widthWindow = Dimensions.get('window').width
class StoreProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: 'Try Satria',
            image: 'https://res.cloudinary.com/dvyonb6zt/image/upload/v1563542754/Product/ggirl_omijq3.png',
            error: ''
        };
        if ( !props.user.isLogin ) {
            props.navigation.navigate('Login')
        }
    }

    goback = () => {
        const { navigation } = this.props;
        navigation.goBack()
    }
    render() {
        // console.log("this.state.email");
        return (
            <View>
                <View style={style.backgroundUp}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground style={style.imageBox} source={{ uri: this.state.image }} />
                        <View style={style.imageBox2}>
                            <ImageBackground  style={{height: 40, width: 40}} source={require('../Assets/Icons/log_out.png')} />
                        </View>
                    </View>
                </View>
                <View style={style.loginBox}>
                    <Text style={style.loginText}>{this.state.name}</Text>
                    <View style={style.detailTextBox}>
                        <View style={style.iconBox}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/email.png')} />
                        </View>
                        <Text style={style.textTop}>try.insoft@gmail.com</Text>
                    </View>
                    <View style={style.detailTextBox}>
                        <View style={style.iconBox}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/phone2.png')} />
                        </View>
                        <Text style={style.textTop}>0823 9108 2250</Text>
                    </View>
                    <View style={style.detailTextBox}>
                        <View style={style.iconBox}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/gender.png')} />
                        </View>
                        <Text style={style.textTop}>Male</Text>
                    </View>
                    <View style={style.detailTextBox}>
                        <View style={[style.iconBox, { height: 70 }]}>
                            <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/ig.png')} />
                            {/* </ImageBackground> */}
                        </View>
                        <Text style={style.textTop} >@try_a.k.a_mermaids sssssssssssssssssssssssss </Text>
                    </View>
                    <TouchableOpacity style={[style.buttonAddProduct, {alignSelf: 'center', width:  widthWindow - 200}]} onPress={() => this.goback()}>
                        <Text style={[style.loginText, { color: 'white' }]}>Edit</Text>
                    </TouchableOpacity>

                </View>
                <View style={style.backgroundDown} />
            </View>

        );
    }
}
const mapStateToProps= state => {
	return {
		user: state.user,
	}
  }

export default connect(mapStateToProps)(StoreProfile);
