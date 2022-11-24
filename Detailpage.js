import { NativeBaseProvider, Box, Image, Center, Text, HStack, Button, IconButton } from "native-base";
import apple from './assets/apple.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Detailpage({ route, navigation }) {

  const {item} = route.params

  const handleAddToCart = () => {
    alert("Do somethinhg fucking gay shit!")
  }

  return (
    <NativeBaseProvider>

        <Box p="2">
            <Center>
              <Image source={item.image} alt="Alternate Text" size="xl" />
            </Center>
        </Box>

        <Box p="2">
            <Text fontWeight="bold" fontSize="2xl">{item.name}</Text>
        </Box>

        <Box p="2">
            <HStack justifyContent="space-between" alignItems="center">
                <Text>${item.price}/kg</Text>
                <Text color="yellow.400" fontWeight="bold">✮<Text>{item.rating}</Text></Text>
                <HStack justifyContent="center" alignItems="center">
                    <IconButton icon={<AntDesign name="minussquareo" size={24} color="black" />}/>
                    <Text color="success.500" fontWeight="bold">1kg</Text>
                    <IconButton icon={<AntDesign name="plussquareo" size={24} color="black" />}/>
              </HStack>
            </HStack>
        </Box>


        <Box flex="1" p="2">
            <Text fontWeight="bold" fontSize="2xl">Details</Text>
            <Text color="muted.600">{item.description}</Text>
            <Text fontWeight="bold" fontSize="2xl">Deliver Info</Text>
            <Text color="muted.600">Free home delivery to anywhere of Bangladesh.</Text>
        </Box>


        <Box>
            <Button leftIcon={<FontAwesome name="cart-plus" size={24} color="white" />} bg="success.600" onPress={handleAddToCart}>Add to cart</Button>
        </Box>


    </NativeBaseProvider>
  );
}