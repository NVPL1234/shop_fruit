import { View } from 'react-native';
import { NativeBaseProvider, Box, Image, Center, Text, HStack, Button, IconButton, Checkbox } from "native-base";
import apple from './assets/apple.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


export default function Cartpage() {

  return (
    <NativeBaseProvider>

        <Box bg="success.500" p="3">
                <HStack justifyContent="space-between" alignItems="center">
                    <IconButton icon={<Ionicons name="md-chevron-back" size={24} color="white" />} />
                    <Text fontWeight="bold" color="white" fontSize="2xl">Shopping Cart</Text>
                    <IconButton icon={<MaterialCommunityIcons name="dots-vertical" size={24} color="white" />} />
                </HStack>
                <Center><Text color="white">2 items selected</Text></Center>
        </Box>
        <Box flex="1">
            <HStack alignItems="center">
                <IconButton icon={<Foundation name="info" size={24} color="grey" />} />
                <Text color="grey">Press long on item to remove them from cart</Text>
            </HStack>
            <HStack alignItems="center" mx="2" my="1">
                <Checkbox value="Photography" my="1" borderRadius="10" />
                <Box bg="white" p="2" borderRadius="10" flex="1">
                    <HStack alignItems="center">
                        <Image source={apple} size={45} borderRadius={100} alt="fruitImage" />
                        <Box px="2" flex="1">
                            <Text>Red sweet mangoes</Text>
                            <Text>52 kgs avaiables in stock</Text>
                            <HStack alignItems="center">
                                <Text flex="1">Subtotal: $24</Text>
                                <HStack alignItems="center">
                                    <IconButton icon={<AntDesign name="minussquareo" size={24} color="black" />}/>
                                    <Text color="red.700" fontWeight="bold">1kg</Text>
                                    <IconButton icon={<AntDesign name="plussquareo" size={24} color="black" />}/>
                                </HStack>
                            </HStack>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
            <HStack alignItems="center" mx="2" my="1">
                <Checkbox value="Photography" my="1" borderRadius="10" />
                <Box bg="white" p="2" borderRadius="10" flex="1">
                    <HStack alignItems="center">
                        <Image source={apple} size={45} borderRadius={100} alt="fruitImage" />
                        <Box px="2" flex="1">
                            <Text>Red sweet mangoes</Text>
                            <Text>52 kgs avaiables in stock</Text>
                            <HStack alignItems="center">
                                <Text flex="1">Subtotal: $24</Text>
                                <HStack alignItems="center">
                                    <IconButton icon={<AntDesign name="minussquareo" size={24} color="black" />}/>
                                    <Text color="red.700" fontWeight="bold">1kg</Text>
                                    <IconButton icon={<AntDesign name="plussquareo" size={24} color="black" />}/>
                                </HStack>
                            </HStack>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>

        <Box>
          <Button bg="success.500" leftIcon={<FontAwesome5 name="coins" size={24} color="white" />}>CHECK OUT</Button>
        </Box>

    </NativeBaseProvider>
  );
}