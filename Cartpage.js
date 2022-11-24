import React from 'react';
import { NativeBaseProvider, Box, Image, Center, Text, HStack, Button, IconButton, Checkbox, Pressable } from "native-base";
import apple from './assets/apple.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MyData } from './Context';


export default function Cartpage({ navigation }) {

    console.log('App rerender');
  const { carts } = React.useContext(MyData);
  const [listProduct, setListProduct] = React.useState([]);
  const removeFromCart = (o) => {
    setListProduct(prev => prev.filter((val) => {
        if(val.id !== o.id) {
            return val;
        }
    }));
    // for (let index = 0; index < listProduct.length; index++) {
    //     const element = listProduct[index];
    //     if(element.id === o.id) {
    //         setListProduct(prev => prev.filter((val) => {
    //             if(val.id !== o.id) {
    //                 return val;
    //             }
    //         }));
    //         carts.splice(index,1);
    //         console.log('delete success');
    //         setTimeout(() => {
    //             setListProduct(carts);
    //         }, 500);
    //     }
    // }
  }
  React.useEffect(() => {
    setListProduct(carts);
  },[carts]);

  return (
    <NativeBaseProvider>

        <Box bg="success.500" p="3">
                <HStack justifyContent="space-between" alignItems="center">
                    <IconButton icon={<Ionicons name="md-chevron-back" size={24} color="white" />} onPres={() => navigation.navigate("Homepage")}/>
                    <Text fontWeight="bold" color="white" fontSize="2xl">Shopping Cart</Text>
                    <IconButton icon={<MaterialCommunityIcons name="dots-vertical" size={30} color="white" />} size="lg" />
                </HStack>
                <Center><Text color="white">2 items selected</Text></Center>
        </Box>
        <Box flex="1">
            <HStack alignItems="center">
                <IconButton icon={<Foundation name="info" size={24} color="grey" />} />
                <Text color="grey">Press long on item to remove them from cart</Text>
            </HStack>
            {
                listProduct.map(o => {
                    return <Pressable key={Math.random()} onLongPress={() => removeFromCart(o)}>
                                <HStack alignItems="center" mx="2" my="1">
                                    <Checkbox my="1" borderRadius="10" accessibilityLabel="This is a dummy checkbox" value="isSelected" colorScheme="purple" />
                                    <Box bg="white" p="2" borderRadius="10" flex="1">
                                        <HStack alignItems="center">
                                            <Image source={o.image} size={45} borderRadius={100} alt="fruitImage" />
                                            <Box px="2" flex="1">
                                                <Text>{o.name}</Text>
                                                <Text>{o.stock} kgs avaiables in stock</Text>
                                                <HStack alignItems="center">
                                                    <Text flex="1">Subtotal: ${o.price}.0</Text>
                                                    <HStack alignItems="center">
                                                        <IconButton icon={<AntDesign name="minussquareo" size={24} color="black" />}/>
                                                        <Text color="red.700" fontWeight="bold">{o.quantity}kg</Text>
                                                        <IconButton icon={<AntDesign name="plussquareo" size={24} color="black" />}/>
                                                    </HStack>
                                                </HStack>
                                            </Box>
                                        </HStack>
                                    </Box>
                                </HStack>
                    </Pressable>
                })
            }
        </Box>

        <Box>
          <Button bg="success.500" leftIcon={<FontAwesome5 name="coins" size={24} color="white" />}>CHECK OUT</Button>
        </Box>

    </NativeBaseProvider>
  );
}