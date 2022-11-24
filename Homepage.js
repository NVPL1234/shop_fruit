import React from 'react';
import { Badge, Box, Center, HStack, Icon, IconButton, Image, Input, NativeBaseProvider, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import banner from './images/24606e32a04a52140b5b_1617076998.jpg';
import { AntDesign } from '@expo/vector-icons';
import apple from './assets/apple.png';
import apples from './assets/apples.png';
import { MyData } from './Context';

export default function Homepage() {

  const { fruits } = React.useContext(MyData);

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
                        return <Center mx="1" key={Math.random()}>
                                  <Box bg="white" p="3" borderRadius="10">
                                      <Image source={o.image} alt="apple" size={45} borderRadius={150} />
                                  </Box>
                                  <Text>{o.name}</Text>
                              </Center>
                    })
                  }
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                  </Center>
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
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
                  <Center mx="1">
                      <Box bg="white" p="3" borderRadius="10">
                          <Image source={apple} alt="apple" size={45} borderRadius={150} />
                      </Box>
                      <Text>Apples</Text>
                      <Text>$12</Text>
                  </Center>
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
                  <Center>
                      <Box bg="white" borderRadius="15" borderWidth="1" borderColor="blue.200">
                          <Badge colorScheme="success">-17% OFF</Badge>
                          <Image source={apples} alt="apples" size={90} borderRadius={20} />
                      </Box>
                      <Text>Apples</Text>
                      <Text strikeThrough color="error.400">$120.0</Text>
                      <Text fontWeight="bold" color="success.400">$100.0</Text>
                  </Center>
                  <Center>
                      <Box bg="white" borderRadius="15" borderWidth="1" borderColor="blue.200">
                          <Badge colorScheme="success">-17% OFF</Badge>
                          <Image source={apples} alt="apples" size={90} borderRadius={20} />
                      </Box>
                      <Text>Apples</Text>
                      <Text strikeThrough color="error.400">$120.0</Text>
                      <Text fontWeight="bold" color="success.400">$100.0</Text>
                  </Center>
                  <Center>
                      <Box bg="white" borderRadius="15" borderWidth="1" borderColor="blue.200">
                          <Badge colorScheme="success">-17% OFF</Badge>
                          <Image source={apples} alt="apples" size={90} borderRadius={20} />
                      </Box>
                      <Text>Apples</Text>
                      <Text strikeThrough color="error.400">$120.0</Text>
                      <Text fontWeight="bold" color="success.400">$100.0</Text>
                  </Center>
                  <Center>
                      <Box bg="white" borderRadius="15" borderWidth="1" borderColor="blue.200">
                          <Badge colorScheme="success">-17% OFF</Badge>
                          <Image source={apples} alt="apples" size={90} borderRadius={20} />
                      </Box>
                      <Text>Apples</Text>
                      <Text strikeThrough color="error.400">$120.0</Text>
                      <Text fontWeight="bold" color="success.400">$100.0</Text>
                  </Center>
                  <Center>
                      <Box bg="white" borderRadius="15" borderWidth="1" borderColor="blue.200">
                          <Badge colorScheme="success">-17% OFF</Badge>
                          <Image source={require('./assets/bananas.png')} alt="apples" size={90} borderRadius={20} />
                      </Box>
                      <Text>Apples</Text>
                      <Text strikeThrough color="error.400">$120.0</Text>
                      <Text fontWeight="bold" color="success.400">$100.0</Text>
                  </Center>
              </HStack>
          </Box>
      </Box>
    </NativeBaseProvider>
  );
}