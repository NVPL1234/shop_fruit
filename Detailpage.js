import { NativeBaseProvider, Box, Image, Center, Text, HStack, Button, IconButton } from "native-base";
import apple from './assets/apple.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Detailpage({ item }) {

  const handleAddToCart = () => {
    alert("Do somethinhg fucking gay shit!")
  }

  return (
    <NativeBaseProvider>

        <Box p="2">
            <Center>
              <Image source={apple} alt="Alternate Text" size="xl" />
            </Center>
        </Box>

        <Box p="2">
            <Text fontWeight="bold" fontSize="2xl">Red Sweet ripped Mangoes</Text>
        </Box>

        <Box p="2">
            <HStack justifyContent="space-between" alignItems="center">
                <Text>$12/kg</Text>
                <Text color="yellow.400" fontWeight="bold">✮<Text>4.8 (126 rating)</Text></Text>
                <HStack justifyContent="center" alignItems="center">
                    <IconButton icon={<AntDesign name="minussquareo" size={24} color="black" />}/>
                    <Text color="success.500" fontWeight="bold">1kg</Text>
                    <IconButton icon={<AntDesign name="plussquareo" size={24} color="black" />}/>
              </HStack>
            </HStack>
        </Box>


        <Box flex="1" p="2">
            <Text fontWeight="bold" fontSize="2xl">Details</Text>
            <Text color="muted.600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</Text>
            <Text fontWeight="bold" fontSize="2xl">Deliver Info</Text>
            <Text color="muted.600">Free home delivery to anywhere of Bangladesh.</Text>
        </Box>


        <Box>
            <Button leftIcon={<FontAwesome name="cart-plus" size={24} color="white" />} bg="success.600" onPress={handleAddToCart}>Add to cart</Button>
        </Box>


    </NativeBaseProvider>
  );
}