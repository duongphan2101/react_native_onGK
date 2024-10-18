import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenLogin from './Screens/ScreenLogin';
// import ScreenLogin from './Screens/SreenElectronics';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SreenLogin' screenOptions={{headerShown: false}}>
        <Stack.Screen name="SreenLogin" component={ScreenLogin} />
        {/* <Stack.Screen name="SreenElectronics" component={ScreenElectronics} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}