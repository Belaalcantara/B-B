import React from 'react';
import { useContext } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { UserContext } from '../userContext';

import Home from "../screens/Home";
import SobreNos from "../screens/SobreNos";
import Register from "../screens/Cadastro";
import Comentarios from '../screens/Comentarios';
import RendComent from '../screens/RendComent'
import Orders from '../screens/Pedidos';
import Pgpratos from '../screens/Pgpratos';
import Logins from '../screens/Login'
import Login from '../screens/Login';
import Restaurantes from '../screens/Restaurantes';
import DetailsOrders from '../screens/Detalhes';
import Carrinho from '../screens/Carrinho';




const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ user, ...props }) => {
  return (
    <ImageBackground source={require("../../assets/fundodrawer.png")} style={styles.background}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image source={require("../../assets/igicon.png")} style={styles.profileImage} />
          <Text style={styles.profileText}>{user ? user.name : 'Nome'}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const DrawerRoutes = () => {
  const { user } = useContext(UserContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} user={user} />}
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Pedidos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />



      <Drawer.Screen
        name="Cadastro"
        component={Register}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="Cadastro"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />



      <Drawer.Screen
        name="SobreNos"
        component={SobreNos}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Equipe B&B",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name='user'
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: user ? 'Perfil' : 'Login',
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          drawerItemStyle: {
            display: 'none'
          }
        }}
      />

      <Drawer.Screen
        name="Restaurantes"
        component={Restaurantes}
        initialParams={{ type: null }}
        options={{
          drawerItemStyle: {
            display: 'none'
          }
        }}
      />

      <Drawer.Screen
        name="Pgpratos"
        component={Pgpratos}
        initialParams={{ id: null }}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          headerTitle:false
        }}
      />

      <Drawer.Screen
        name="DetailsOrders"
        component={DetailsOrders}
        initialParams={{ order: null }}
        options={{
          drawerItemStyle: {
            display: 'none'
          },
          headerTitle:false
        }}
      />

<Drawer.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="Carrinho"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Carrinho",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    color: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default DrawerRoutes;