'use strict'
var React = require('react-native');

let {
    StyleSheet, Dimensions
} = React;

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width

module.exports = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselBox: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 15,
        backgroundColor: '#fff',
        maxHeight: 210,
    },
    carouselView: {
        borderRadius: 10,
        overflow: 'hidden',
        maxHeight: 110
    },
    carouselImage: {
        width: widthWindow - 30,
        height: 150,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        marginEnd: 10
    },
    carouselSecondBox: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 0
    },
    carouselFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -30
    },
    viewMore: {
        borderColor: '#34c759',
        borderWidth: 3,
        textAlign: "center",
        textAlignVertical: "center",
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        color: '#34c759',
        fontWeight: 'bold'
    },
    textMountain: {
        borderColor: '#34c759',
        borderTopWidth: 3,
        padding: 3,
        maxWidth: 150,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        color: '#34c759',
        fontWeight: 'bold'
    },
    buttonMore: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        position: 'absolute',
        bottom: 40,
        right: 0,
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    },
    flatCard: {
        width: '100%',
        // padding: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginTop: 10,
        height: heightWindow /2
    },
    flatMountain: {
        width: '100%',
        // padding: 16,
        backgroundColor: 'white',
        elevation: 4,
        marginTop: 10,
        // height: heightWindow /2
    },
    shadow: {
        marginTop: 20,
        // borderColor: 'rgba(0, 0, 0, 0.5)',
        // borderBottomWidth:1
    },
    promoCard: {
        borderRadius: 5,
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 0.62,

        elevation: 1,
        flexDirection: 'row',
        padding: 8,
        paddingLeft: 15,
        alignItems: 'center'
    },
    goShop: {
        backgroundColor: '#03AC0E',
        borderRadius: 5,
        padding: 3,
        paddingRight: 17,
        height: 40,
        width: 136,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 50,
        alignSelf: 'flex-end'
    },
    itemFlat: {
        flexDirection: 'column',
        marginTop: 5,
        height: 100,
        justifyContent: 'space-around',
        // width: 50,
        // backgroundColor: 'blue'
    },
    itemFlat2: {
        marginTop: 5,
        height: 100,
        justifyContent: 'space-around',
        width: widthWindow / 3,
        // backgroundColor: 'blue'
    },
    searchBox: {
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#03AC0E',
        borderWidth: 2,
        width: widthWindow/1.2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 0.62,

        elevation: 1,
        backgroundColor:'#f0f0f0',
        alignSelf: "center",
        padding:5
    },
    iconBox:{
        position: 'absolute',
        right: -2,
        top: -2,
        // backgroundColor:
        borderColor: '#03AC0E',
        // backgroundColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        height: 50, 
        width: 50,
        zIndex:5
    },
    itemMount: {
        height: 200,
        width: widthWindow /1.1,
        // backgroundColor: 'blue',
        alignSelf: 'center', 
        // marginTop: 15
    },
    mountImage:{
        height: 150, 
        width: 150,
        position: 'absolute',
        right: -30,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 8,
        overflow: 'hidden'
    },
    listStyle:{
        marginTop:15, 
        backgroundColor: '#34c759',
        height: 170,
        padding: 10,
        borderRadius: 20
    },
    statusText: {
        color: '#20ab43', 
        fontWeight: 'bold', 
        backgroundColor:'#f0f0f0', 
        alignSelf:'flex-start', 
        paddingLeft: 18,  
        paddingRight: 18, 
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50
    },
    mountTitle:{
        color: '#1c6b30',
        fontSize : 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 8
    },
    mountDetail:{
        color: '#1c6b30',
        // fontSize : 18,
        // fontWeight: 'bold',
        // marginLeft: 15,
        // marginTop: 5,
        marginBottom: 3
    }
});