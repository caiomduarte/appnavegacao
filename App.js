

//1 Passo - importar o navegation container
import {NavigationContainer, createNavigationContainer} from '@react-navigation/native'

//2 Passo - Importar o componente das abas
import TabRoutes from "./src/routes/tab_routes";

export default function App(){
  return(
    <NavigationContainer>
      <TabRoutes/>
    </NavigationContainer>
  );
}