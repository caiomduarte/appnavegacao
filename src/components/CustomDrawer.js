
// import { View, Text, Image, StyleSheet } from 'react-native';

// //Importar o componente para manipular os itens do menu drawer
// import { DrawerItemList } from '@react-navigation/drawer';

// export default function CustomDrawer({...props}) {
//  return (
//     <View style={styles.container}>
//         <View style={styles.userArea}>
//             <Image source={{uri: 'https://randomuser.me/api/portraits/men/27.jpg'}} style={styles.user}/>
//             <Text style={styles.nome}>Caio Malheiros</Text>
//             <Text style={styles.email}>md.caio@yahoo.com.br</Text>            
//         </View>
        
//         <DrawerItemList {...props}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,        
//     },

//     userArea:{
//         justifyContent: 'center',
//         alignItems:'center',
//         marginTop:15,
//         marginLeft:10,
//         marginBottom:10
//     },

//     user:{
//         width:55,
//         height:55,
//         borderRadius: 50
//     },

//     nome:{
//         marginTop:10,
//         fontSize:18,
//         fontWeight:'bold'
//     },

//     email:{
//         fontSize:15
//     }
// })