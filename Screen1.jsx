import React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, Keyboard, Button } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import { Icon } from '@rneui/themed';
import { FlatList } from "react-native";
const slide1 = require("./images/24606e32a04a52140b5b_1617076998.jpg")
const slide2 = require("./images/web_1663830501.jpg")
const slide3 = require("./images/z3833223154603_b97c6ac30892e433b421ef79384a4e0c_1666854849.jpg")
const slide4 = require("./images/z3833223160777_77cbb033bcf8957548bbf41f67f5369c_1666854798.jpg")
const slide5 = require("./images/z3836261352875_d764bf92212993ff1f013230240ce5a3_1667009396.jpg")
const sp1 = require("./images/apples.jpg")
const sp2 = require("./images/guavas.jpg")
const sp3 = require("./images/lichies.jpg")
const sp4 = require("./images/mangoes.jpg")
const sp5 = require("./images/orangs.jpg")
const list = [
    {
        anh: sp1,
        firstname: "Apples"
    },
    {
        anh: sp3,
        firstname: "Lichies"
    },
    {
        anh: sp4,
        firstname: "Mangoes"
    },
    {
        anh: sp5,
        firstname: "Oranges"
    }
]
const danhsachsanpham = [
    {
        hinhsanpham: sp1,
        tesanpham: "Táo đỏ",
        gia: "$10"
    },
    {
        hinhsanpham: sp2,
        tesanpham: "Táo đỏ",
        gia: "$10"
    },
    {
        hinhsanpham: sp3,
        tesanpham: "Táo đỏ",
        gia: "$10"
    },
    {
        hinhsanpham: sp4,
        tesanpham: "Táo đỏ",
        gia: "$10"
    },
    {
        hinhsanpham: sp4,
        tesanpham: "Táo đỏ",
        gia: "$10"
    },
    {
        hinhsanpham: sp4,
        tesanpham: "Táo đỏ",
        gia: "$10"
    },
]
const GridView = ({ anh, firstname }) => {
    return (
        <View style={{ marginLeft: 4 }}>
            <View style={{}}>
                <Image style={styles.image} source={anh}></Image>
            </View>
            <View style={{ padding: 2 }}>
                <Text style={{ width: 90 }}>{firstname}</Text>
            </View>
        </View>
    )
}
const GridViews = ({ hinhsanpham, tesanpham, gia, navigation}) => {
    
    const onHandlePress = ()=>{
        console.log(tesanpham);
        navigation.navigate('Screen2', {gia}, {hinhsanpham}, {tesanpham})
    }

    return (
        <View style={{}}>
            <View style={{marginLeft:16}}>
                <Image style={styles.image} source={hinhsanpham}></Image>
            </View>
            <View style={{marginLeft:16}}>
                <Text style={{ width: 90,fontSize:16 }}>{tesanpham}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 5, padding: 4 }}>
                <Text style={{fontSize:20}}>{gia}</Text>
                <View>
                    <Button color={"red"} title='Add Cart' onPress={onHandlePress}></Button>
                </View>
            </View>
        </View>
    )
}
// class Sliderbox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         "https://source.unsplash.com/1024x768/?nature",
//         "https://source.unsplash.com/1024x768/?water",
//         "https://source.unsplash.com/1024x768/?girl",
//         "https://source.unsplash.com/1024x768/?tree",
//         require('./assets/images/girl.jpg'),
//       ]
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <SliderBox
//           images={this.state.images}
//           onCurrentImagePressed={index =>
//             console.warn(`image ${index} pressed`)
//           }
//         />
//       </View>
//     );
//   }
// }

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }} />
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};
const SlideShow = () => {
    return (
        <View style={{}}>
            <Image style={styles.slideshow} source={slide1} />
        </View>
    )
}
const Castory = () => {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Loại sản phẩm</Text>
                <Text style={{ color: "red", fontSize: 16 }}>Show All</Text>
            </View>
            <View>
                <ScrollView>
                    <View style={{ width: "100%", height: "100%" }}>
                        <FlatList
                            data={list}
                            renderItem={({ item }) => <GridView anh={item.anh} firstname={item.firstname} />}
                            numColumns={4}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const ListSanPham = ({navigation}) => {
    return (
        <View>
            <View>
                <Text>Danh sách các sản phẩm</Text>
            </View>
            <View style={{ flex: 1, width: "100%", height: "100%" }}>
                <FlatList
                    data={danhsachsanpham}
                    renderItem={({ item }) => <GridViews hinhsanpham={item.hinhsanpham} tesanpham={item.tesanpham} gia={item.gia} navigation={navigation} />}
                    numColumns={3}
                />
            </View>
        </View>
    )
}
const Screen1 = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <View style={{ backgroundColor: "white" }}>
                    <SearchBar />
                </View>
                <View>
                    <SlideShow />
                </View>
                <View>
                    <Castory />
                </View>
                <View>
                    <ListSanPham navigation = {navigation} />
                </View>
            </ScrollView>
        </View>
    )
}
// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    slideshow: {
        marginTop: 10,
        marginLeft: 30,
        width: 300,
        height: 100
    }
});
export default Screen1