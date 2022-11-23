import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen0 from './Screen0'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Context from './Context'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
      <Context>
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Screen0' component={Screen0} />
                <Stack.Screen name='Screen1' component={Screen1} />
                <Stack.Screen name='Screen2' component={Screen2} />
                <Stack.Screen name='Screen3' component={Screen3} />
            </Stack.Navigator>
          </NavigationContainer>
        </Context>
    )
}

export default App