import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'
const { height, width } = Dimensions.get('window')

class DetailProduct extends Component {
    constructor(props) {
        super(props)
        const { navigation } = this.props;
        this.state = {
            id: navigation.getParam('id'),
            name: navigation.getParam('name'),
            rentPrice: navigation.getParam('rentPrice'),
            stock: navigation.getParam('stock'),
            desc: navigation.getParam('desc'),
            photo: navigation.getParam('photo'),
            activeIndex: 0,
            carouselItems: [
                {
                    imageLink: 'http://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg'
                },
                {
                    imageLink: 'http://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_A1.jpg'
                },
                {
                    imageLink: 'http://image.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_A2.jpg'
                },
                {
                    imageLink: 'http://image.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_A3.jpg'
                }
            ]
        }
    }
    _renderItem({ item, index }) {
        return (
            <Image style={{ flex: 1, resizeMode: 'contain', }} source={{ uri: item.imageLink }} />
        )
    }
    prevCarouselImage = () => {
        this.state.activeIndex > 0 ?
            this.carousel._snapToItem(this.state.activeIndex - 1) : this.carousel._snapToItem(this.state.carouselItems.length - 1)
        this.state.activeIndex < this.state.carouselItems.length - 1 ?
            this.carousel._snapToItem(this.state.activeIndex + 1) : this.carousel._snapToItem(0)
    }
    priceFormat(number) {

        var number_string = number.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);
        
        if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
        }
        
        return 'Rp ' + rupiah;
        }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ height: 500, flex: 2 }}>
                    <Carousel
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={width}
                        itemWidth={width}
                        renderItem={this._renderItem}
                        onSnapToItem={
                            index => this.setState({ activeIndex: index })
                        }
                    />
                </View>
                <View style={{ padding: 5, flex: 3 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: 'black' }}>Nama Item</Text>
                            <Text style={{ color: 'black' }}>Harga Sewa</Text>
                            <Text style={{ color: 'black' }}>Ketersediaan</Text>
                            <Text style={{ color: 'black' }}>Deskripsi</Text>

                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: 'black' }} numberOfLines={1}>: {this.state.name}</Text>
                            <Text style={{ color: 'black' }}>: {this.priceFormat(this.state.rentPrice)}</Text>
                            <Text style={{ color: 'black' }}>: {this.state.stock}</Text>
                            <Text style={{ color: 'black' }}>: {this.state.desc}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default DetailProduct;