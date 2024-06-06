//1 passo - importar um componenete createDrawerNavigatior
import {createDrawerNavigator} from '@react-navigation/drawer'

//2 passo - importar as telas que vão ser navegadas
import Home from '../pages/home';
import Feed from '../pages/feed';

import {FontAwesome, Octicons} from '@expo/vector-icons';
//passo 3 - criar uma variavel para 
const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: true,
        }}>
            <Drawer.Screen name="home" component={Home}
            options={{
                drawerLabel: 'Inicio', 
                drawerActiveBackgroudColor: 'Red',
                drawerIcon:() => <FontAwesome name="home" size={24} color="black"/>,
            }}
            />
            <Drawer.Screen name="feed" component={Feed}/>
             </Drawer.Navigator>
       
    )
}