import React, { Component } from 'react';
import { Platform, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../Assets/Style'
import ProductList from '../components/ProductList'

export default class Mountain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.iconBox3}>
                        <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../Assets/Icons/back.png')} />
                    </View>
                    <View style={styles.searchBox}>

                        <TextInput style={{ color: '#20ab43' }} placeholder={"Search...."}></TextInput>
                        <View style={styles.iconBox2}>
                            <ImageBackground style={{ height: 40, width: 40 }}
                                source={require('../Assets/Icons/search.png')} />
                        </View>
                    </View>
                </View>
                <ProductList />
                <TouchableOpacity style={[styles.button, { alignSelf: 'center', width: 200, backgroundColor: 'rgb(45, 173, 78)', borderColor: '#f0f0f0', borderTopWidth: 5, borderRightWidth: 5, borderLeftWidth: 5 }]} onPress={() => this.goback()}>
                            <Text style={[styles.loginText, { color: 'white' }]}>Add Product</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

