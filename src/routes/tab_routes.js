
//1 passo - importar o createBottomTabNavigator
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//2 passo - Importar as telas que serão utilizadas nas abas
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

//3 passo - criar um Tab
const Tab = createBottomTabNavigator();

//Depois de funcionar - importar um pacote de icones
import { Feather } from '@expo/vector-icons';

//4 Passo - criar a função para construir as abas
export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false, 
            tabBarLabelStyle:{
                fontSize:15,
                color: 'white',
                fontWeight: 'bold',
                
            },
            tabBarStyle: {
                backgroundColor: '#34CB79',
                color: 'white'              
            
            }}}
            
            
        
        >
            <Tab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: () => <Feather name="home" size={20} color="white" />,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen name="mapas" component={Dashboard}
                 options={{
                    tabBarIcon: () => <Feather name="navigation" size={20} color="white" />,
                    tabBarLabel: 'Mapas'
                }}
            />
        </Tab.Navigator>
    )
}