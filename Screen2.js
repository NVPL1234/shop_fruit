import { View, Image, Text, TouchableOpacity, Button } from "react-native";

export default function Screen2({route}) {


    return (
        <View>
            <View style={{ flexDirection: 'row', backgroundColor: '#09b333' }}>
                <Image source={require('./assets/icon_back.png')} style={{ backgroundColor: '#09b333' }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: '30%', marginRight: '25%', marginTop: '4%', color: 'white' }}>Fruit Details</Text>
                <Image source={require('./assets/icon_3dot.jpg')} />
            </View>

            <View style={{ marginTop: '5%' }}>
                <Image />
            </View>

            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>name</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: '10%' }}>{route.params.gia}</Text>
                    <Image source={require('./assets/icon_star.png')} />
                    <Text style={{ marginLeft: '1%', marginRight: '40%' }}>star</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{backgroundColor: 'gray', width: '10%', height: '90%'}}>
                            <Text style={{textAlign: 'center'}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{marginLeft: '10%', marginRight: '10%'}}>2kg</Text>
                        <TouchableOpacity style={{backgroundColor: 'gray', width: '10%', height: '90%'}}>
                            <Text style={{textAlign: 'center'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Details</Text>
                    <Text>details</Text>
                </View>

                <View>
                    <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#09b333', borderTopWidth: '10%'}}>
                        <Image source={require('./assets/icon_cart.jpg')}/>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: '30%', paddingTop: '3%'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}