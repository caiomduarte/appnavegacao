

//1 Passo - importar o navegation container
import {NavigationContainer, createNavigationContainer} from '@react-navigation/native'

//2 Passo - Importar o gerenciador das rotas das abas

import TabRoutes from './tab_routes';

//import DrawerRoutes from './drawer_routes';
export default function CustomRoutes() {
 return (
   <NavigationContainer>
        <TabRoutes/>
    </NavigationContainer>
  );
}