import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import style from '../Assets/styles'
import { ScrollView } from 'react-native-gesture-handler';

const widthWindow = Dimensions.get('window').width
const heightWindow = Dimensions.get('window').height
class EditProfileStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mermaid Store',
            email: 'Mermaid store@ymail.com',
            password: '12456789',
            hp: '082391082250',
            address: 'Yogyakarta',
            image: 'https://res.cloudinary.com/dvyonb6zt/image/upload/v1563856184/Product/stop-shop-strike-vote-t_voj3z7.jpg',
            error: ''
        };
    }

    goback = () => {
        const { navigation } = this.props;
        navigation.goBack()
    }

    // textInputFocus =()=>{
    //     con
    // }
    render() {
        // console.log("this.state.email");
        // const {state} = this.state
        return (
            <View>
                <View style={style.backgroundUp}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground style={style.imageBox} source={{ uri: this.state.image }} />
                        <View style={style.imageBox2}>
                            <ImageBackground style={{ height: 40, width: 40 }} source={require('../Assets/Icons/log_out.png')} />
                        </View>
                    </View>
                </View>
                <KeyboardAvoidingView style={[style.loginBox, {height: heightWindow / 1.6, width: widthWindow - 80}]} behavior="padding" enabled keyboardVerticalOffset={20}>
                    <ScrollView>
                        <View style={style.detailTextBox}>
                            <View style={[style.iconBox, { height: 50 }]}>
                                <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/email.png')} />
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ name: text })}
                                style={style.textTop} >{this.state.name}</TextInput>
                        </View>
                        <View style={style.detailTextBox}>
                            <View style={[style.iconBox, { height: 50 }]}>
                                <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/email.png')} />
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ email: text })}
                                style={style.textTop} >{this.state.email}</TextInput>
                        </View>
                        <View style={style.detailTextBox}>
                            <View style={[style.iconBox, { height: 50 }]}>
                                <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/phone2.png')} />
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ password: text })}
                                secureTextEntry
                                style={style.textTop} >{this.state.password}</TextInput>
                        </View>
                        <View style={style.detailTextBox}>
                            <View style={[style.iconBox, { height: 50 }]}>
                                <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/phone2.png')} />
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ hp: text })}
                                style={style.textTop} >{this.state.hp}</TextInput>
                        </View>
                        <View style={style.detailTextBox}>
                            <View style={[style.iconBox, { height: 50 }]}>
                                <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/gender.png')} />
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ address: text })}
                                style={style.textTop} >{this.state.address}</TextInput>
                        </View>
                        <View style={style.detailTextBox}>
                            <View style={[style.iconBox, { height: 50 }]}>
                                <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/ig.png')} />
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ image: text })}
                                style={style.textTop} >{this.state.image}</TextInput>
                        </View>
                        <TouchableOpacity style={[style.buttonAddProduct, { alignSelf: 'center', width: widthWindow - 200, marginBottom: 20 }]} onPress={() => this.goback()}>
                            <Text style={[style.loginText, { color: 'white' }]}>Save</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={style.backgroundDown} />
            </View>

        );
    }
}

export default EditProfileStore;