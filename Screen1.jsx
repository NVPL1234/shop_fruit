import React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { SearchBar } from '@rneui/themed';
import Slideshow from 'react-native-slideshow'
const slide1 = require("./images/24606e32a04a52140b5b_1617076998.jpg")
const slide2 = require("./images/web_1663830501.jpg")
const slide3 = require("./images/z3833223154603_b97c6ac30892e433b421ef79384a4e0c_1666854849.jpg")
const slide4 = require("./images/z3833223160777_77cbb033bcf8957548bbf41f67f5369c_1666854798.jpg")
const slide5 = require("./images/z3836261352875_d764bf92212993ff1f013230240ce5a3_1667009396.jpg")
class SlideshowTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: slide1,
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: slide2,
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: slide3,
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
        );
    }
}
const Screen1 = () => {
    return (
        <View>
            <View>
                <SearchBar
                    placeholder="Type Here..."
                />
            </View>
            <View>
            </View>
        </View>
    )
}
export default Screen1