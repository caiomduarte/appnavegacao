
import 'react-native-gesture-handler';


//1 Passo - importar o navegation container
import {NavigationContainer, createNavigationContainer} from '@react-navigation/native'

//import para utilizar o TabRoutes
//import TabRoutes from './tab_routes';

//Import para utilizar o DrawerRoutes
import DrawerRoutes from './src/routes/drawer_routes';

export default function App(){
  return(
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}