import React from 'react';
import { Badge, Box, Center, HStack, Icon, IconButton, Image, Input, NativeBaseProvider, Pressable, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import banner from './images/24606e32a04a52140b5b_1617076998.jpg';
import { AntDesign } from '@expo/vector-icons';
import apple from './assets/apple.png';
import apples from './assets/apples.png';
import { MyData } from './Context';

export default function Homepage({ navigation }) {

  const { fruits } = React.useContext(MyData);
  const popularFruits = fruits.sort((a,b) => a.rating - b.rating);
  const suggestFruits = fruits.sort((a,b) => b.sale - a.sale);

  const onClickItem = (item) => {
    console.log('data: ', item);
    navigation.navigate("Detailpage", {item: item});
  }

  return (
    <NativeBaseProvider accessible={true}>
      <Box p="3" flex="1">
          <Box>
              <Input variant="rounded" placeholder="Try for 'Oranges'" bg="white"
                  InputLeftElement={<Icon as={<FontAwesome name="search-plus" size={30} color="black" />} size={5} ml="2" color="muted.400" />}
                  InputRightElement={<Icon as={<FontAwesome5 name="bell" size={30} color="black" />} mr="2" color="muted.400" />}
              />
          </Box>

          <Box py="5">
              <Center><Image source={banner} alt="banner" size={100} borderRadius={10} w="400" /></Center>
          </Box>

          <Box>
              <HStack alignItems="center">
                  <Text flex="1" fontSize="lg">Fruit Categories</Text>
                  <Text>Show All</Text>
                  <IconButton icon={<AntDesign name="right" size={24} color="black" />}/>
              </HStack>
          </Box>
          <Box>
              <HStack>
                  {
                    fruits.map(o => {
                        return <Pressable key={Math.random()} onPress={() => onClickItem(o)}>
                                    <Center mx="1">
                                        <Box bg="white" p="3" borderRadius="10">
                                            <Image source={o.image} alt="apple" size={45} borderRadius={150} />
                                        </Box>
                                        <Text>{o.name}</Text>
                                    </Center>
                                </Pressable>
                    })
                  }
              </HStack>
          </Box>

          <Box>
              <HStack alignItems="center">
                  <Text flex="1" fontSize="lg">Most popular</Text>
                  <Text>Show All</Text>
                  <IconButton icon={<AntDesign name="right" size={24} color="black" />}/>
              </HStack>
          </Box>
          <Box>
              <HStack>
                  {
                    popularFruits.map(o => {
                        return <Pressable key={Math.random()} onPress={() => onClickItem(o)}>
                                <Center mx="1">
                                    <Box bg="white" p="3" borderRadius="10">
                                        <Image source={o.image} alt="apple" size={45} borderRadius={150} />
                                    </Box>
                                    <Text>{o.name}</Text>
                                    <Text fontWeight="bold">${o.price}.0</Text>
                                    <Text>{o.rating} ⭐</Text>
                                </Center>
                            </Pressable>
                    })
                  }
              </HStack>
          </Box>

          <Box>
              <HStack alignItems="center">
                  <Text flex="1" fontSize="lg">Suggested for you</Text>
                  <Text>Show All</Text>
                  <IconButton icon={<AntDesign name="right" size={24} color="black" />}/>
              </HStack>
          </Box>
          <Box>
              <HStack alignItems="center">
                  {
                    suggestFruits.map(o => {
                        return <Pressable key={Math.random()} onPress={() => onClickItem(o)}>
                                    <Center>
                                        <Box bg="white" borderRadius="15" borderWidth="1" borderColor="blue.200">
                                            <Badge colorScheme="success">{o.sale}% OFF</Badge>
                                            <Image source={o.image} alt="apples" size={90} borderRadius={20} />
                                        </Box>
                                        <Text>{o.name}</Text>
                                        <Text strikeThrough color="error.400">${o.price}.0</Text>
                                        <Text fontWeight="bold" color="success.400">${o.price}.0</Text>
                                    </Center>
                                </Pressable>
                    })
                  }
              </HStack>
          </Box>
      </Box>
    </NativeBaseProvider>
  );
}