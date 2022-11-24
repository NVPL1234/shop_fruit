import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Context from './Context';

import Startpage from './Startpage';
import Homepage from './Homepage';
import Detailpage from './Detailpage';
import Cartpage from './Cartpage';
import Productpage from './Productpage';


const Stack = createNativeStackNavigator()

const App = () => {
    return (
      <Context>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name='Startpage' component={Startpage} />
                  <Stack.Screen name='Homepage' component={Homepage} />
                  <Stack.Screen name='Detailpage' component={Detailpage} />
                  <Stack.Screen name='Cartpage' component={Cartpage} />
                  <Stack.Screen name='Productpage' component={Productpage} />
              </Stack.Navigator>
          </NavigationContainer>
        </Context>
    )
}

export default App