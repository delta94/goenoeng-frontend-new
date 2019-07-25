import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, SectionList } from 'react-native'
import { shopList2 } from '../Assets/dummy'
import { connect } from 'react-redux'
import styles from '../Assets/Style'
 
class ShopSectionlist extends Component {
    constructor(props) {
        super(props);
    }
    renderStore = ({ item, index }) => {
        return (
            <View style={styles.shadow}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'column', paddingRight: 20 }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>{item.name}</Text>
                        <Text>{item.City}</Text>
                        <FlatList
                            // style={{flex: 3, flexDirection: "row", justifyContent: 'space-around', width:'100%'}}
                            data={item.product}
                            renderItem={this.renderItem}
                            numColumns={3}
                        />
                        {/* <View style={{flexDirection:'row', justifyContent}}> */}
                        <TouchableOpacity style={styles.goShop}
                        onPress={ () => this.props.navigation.navigate('Store') }>
                            <Text style={{ color: 'white' }}>{"Go to Shop"}</Text>
                        </TouchableOpacity>
                        {/* </View> */}
                    </View>
                </View>
            </View>
        )
    }
    renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.itemFLat}>
                <View style={styles.itemFlat2}>
                    <ImageBackground style={{ height: 60, width: 60 }} source={{ uri: item.image }}></ImageBackground>
                    <Text style={{ color: 'black', marginBottom: 3 }}>
                        {item.name}
                    </Text>
                    <Text style={{ color: '#FF5722', fontWeight: '600', marginBottom: 3 }}>{"Rp" + item.harga}</Text>
                </View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render() {
        return (
            <View style={styles.flatCard}>
                {/* <CheckBox></CheckBox> */}
                <FlatList
                    data={shopList2}
                    renderItem={this.renderStore}
                />
            </View>
        )
    }
}

export default ShopSectionlist;