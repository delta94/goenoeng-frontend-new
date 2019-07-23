import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, SectionList } from 'react-native'
import { Product } from '../Assets/dummy'
import { connect } from 'react-redux'
import styles from '../Assets/styles'

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.itemMount}>
                <View style={styles.itemMount}>
                    <View style={styles.listStyle}>
                        <Text style={styles.productTitle}>{item.name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.statusText} />
                                <ImageBackground style={styles.ProductImage} source={{ uri: item.image }}></ImageBackground>
                                {item.status}
                            </View>
                            <View style={{ flexDirection: "column", paddingRight: 120 }}>
                                <Text style={[styles.mountDetail, { color: 'white', marginTop: 32 }]}>{"Price : " + item.harga}</Text>
                                <Text style={[styles.mountDetail, { color: 'white' }]}>{"Stock : " + item.stock}</Text>
                                <Text style={[styles.mountDetail, { color: 'white', textAlign:'justify' }]}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render() {
        return (
            <View style={styles.flatMountain}>
                {/* <CheckBox></CheckBox> */}
                <FlatList
                    data={Product}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default ProductList;