import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, SectionList } from 'react-native'
import { mountDetail } from '../Assets/dummy'
import { connect } from 'react-redux'
import styles from '../Assets/styles'

class Mountainlist extends Component {
    constructor(props) {
        super(props);
    }
    renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.itemMount}>
                <View style={styles.itemMount}>
                    <View style={styles.listStyle}>
                    <Text style={styles.statusText}>
                        {item.status}
                    </Text>
                    <Text style={styles.mountTitle}>{"Gunung "+item.name}</Text>
                    <Text style={styles.mountDetail}>{"Tinggi : "+item.tinggi}</Text>
                    <Text style={styles.mountDetail}>{"Level : "+item.level}</Text>
                    <Text style={styles.mountDetail}>{"sisa Kuota : "+item.kuota}</Text>
                    <ImageBackground style={styles.mountImage} source={{ uri: item.image }}></ImageBackground>
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
                    data={mountDetail}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default Mountainlist;