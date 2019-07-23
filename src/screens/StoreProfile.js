import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import style from '../Assets/Style'

const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: 'Mermaid Store',
      image: 'https://res.cloudinary.com/dvyonb6zt/image/upload/v1563856184/Product/stop-shop-strike-vote-t_voj3z7.jpg',
      error: ''
    };
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
              <ImageBackground style={{ height: 40, width: 40 }} source={require('../Assets/Icons/log_out.png')} />
            </View>
          </View>
        </View>
        <View style={[style.loginBox, {height: fullHeight / 1.7, width: fullWidth - 80}]}>
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
            <View style={[style.iconBox, { height: 70 }]}>
              <ImageBackground style={style.imageIcon} source={require('../Assets/Icons/ig.png')} />
              {/* </ImageBackground> */}
            </View>
            <Text style={style.textTop} >@try_a.k.a_mermaids sssssssssssssssssssssssss </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            <TouchableOpacity style={style.buttonAddProduct} onPress={() => this.goback()}>
              <Text style={[style.loginText, { color: 'white' }]}>Products</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonAddProduct} onPress={() => this.goback()}>
              <Text style={[style.loginText, { color: 'white' }]}>Edit</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={style.backgroundDown} />
      </View>

    );
  }
}

export default Profile;
