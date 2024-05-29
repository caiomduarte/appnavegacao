import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TabRoutes from './tab_routes';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    
    return(
       
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={TabRoutes} />
            
            </Stack.Navigator>
   
    );
}