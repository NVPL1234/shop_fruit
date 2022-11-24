import { NativeBaseProvider, Box, Image, Center, Text, HStack, Button, IconButton, ScrollView } from "native-base";
import apple from './assets/apple.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MyData } from "./Context";
import React from 'react';


export default function Detailpage({ route, navigation }) {

  const {item} = route.params;
  const {carts} = React.useContext(MyData);
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = () => {
    if(quantity <= 0) {
      alert("Quantity must > 0");
      return;
    }
    carts.push(item);
    console.log('carts now: ', carts);
  }

  return (
    <NativeBaseProvider>

        <Box p="2">
            <Center>
                <Image source={item.image} alt="Alternate Text" size="xl" borderColor="gray.400" borderWidth="1" borderRadius="10" />
            </Center>
        </Box>

        <Box p="2">
            <Text fontWeight="bold" fontSize="2xl" underline>{item.name}</Text>
        </Box>

        <Box p="2">
            <HStack justifyContent="space-between" alignItems="center">
                <Text>${item.price}/kg</Text>
                <Text color="yellow.400" fontWeight="bold">⭐<Text>{item.rating} rating</Text></Text>
                <HStack justifyContent="center" alignItems="center">
                    <IconButton icon={<AntDesign name="minussquareo" size={24} color="black" />} onPress={() => setQuantity(prev => prev - 1)}/>
                    <Text color="success.500" fontWeight="bold">{quantity}kg</Text>
                    <IconButton icon={<AntDesign name="plussquareo" size={24} color="black" />} onPress={() => setQuantity(prev => prev + 1)} />
              </HStack>
            </HStack>
        </Box>


        <Box flex="1" p="2">
            <Text fontWeight="bold" fontSize="2xl" underline>Details</Text>
            <Text color="muted.600">{item.description}</Text>
            <Text fontWeight="bold" fontSize="2xl" underline>Deliver Info</Text>
            <Text color="muted.600">Free home delivery to anywhere of Bangladesh.</Text>
        </Box>


        <Box>
            <Button leftIcon={<FontAwesome name="cart-plus" size={24} color="white" />} bg="success.600" onPress={handleAddToCart}>Add to cart</Button>
        </Box>


    </NativeBaseProvider>
  );
}