
import { View, Text, Image, StyleSheet } from 'react-native';

//1 passo - importar o createDrawerNavigator
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'

//2 passo - Importar o arquivo de rotas de abas
import TabRoutes from './tab_routes';

//3 passo - criar um Drawer
const Drawer = createDrawerNavigator();

//Depois de funcionar - importar um pacote de icones
import { Feather } from '@expo/vector-icons';

//Importar as telas
import Home from '../pages/Home';
import Feed from '../pages/Feed';

import CustomDrawer from '../components/CustomDrawer';

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator drawerContent={props => {
            return (
                <DrawerContentScrollView style={styles.container}>
                    <View>
                        <View style={styles.userArea}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/27.jpg' }} style={styles.user} />
                            <Text style={styles.nome}>Caio Malheiros</Text>
                            <Text style={styles.email}>md.caio@yahoo.com.br</Text>
                        </View>
                    </View>

                    <DrawerItem
                        label={'Inicio'}
                        onPress={() => {
                            props.navigation.navigate('home')
                        }}

                    />

                    <DrawerItem
                        label={'Feed'}
                        onPress={() => {
                            props.navigation.navigate('feed')
                        }}

                    />
                </DrawerContentScrollView>
            )

        }}>
            <Drawer.Screen name="home" component={Home}
                options={{
                    drawerIcon: () => <Feather name="home" size={20} color="green" />,
                    drawerLabel: 'Inicio',
                }}
            />

            <Drawer.Screen name="feed" component={Feed}
                options={{
                    drawerIcon: () => <Feather name="home" size={20} color="white" />,
                    drawerLabel: 'Feed'
                }}
            />


        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },

    userArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10
    },

    user: {
        width: 55,
        height: 55,
        borderRadius: 50
    },

    nome: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    email: {
        fontSize: 15
    }
})