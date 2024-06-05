import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação de todas as rotas

import BoasVindas1 from "../screens/BoasVindas1";
import BoasVindas2 from "../screens/BoasVindas2";
import BoasVindas3 from "../screens/BoasVindas3";

import Home from "../screens/Home";
import SobreNos from "../screens/SobreNos";

import Login from "../screens/Login";

import Comentarios from '../screens/Comentarios';
import RendComent from '../screens/RendComent'
import Orders from '../screens/Pedidos';

import Register from '../screens/Cadastro';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BoasVindas1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BoasVindas1' component={BoasVindas1} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  return (
    <ImageBackground source={require("../../assets/fundodrawer.png")} style={styles.background}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image source={require("../../assets/igicon.png")} style={styles.profileImage} />
          <Text style={styles.profileText}>Nome</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
    >

      <Drawer.Screen
        name='BoasVindas1Stack'
        component={BoasVindas1Stack}
        options={{
          drawerLabel: 'BoasVindas1',
          drawerItemStyle: { display: 'none' }
        }}
      />

      {/*  telas de tutoriais  */}

      {/* <Drawer.Screen
        name="BoasVindas1"
        component={BoasVindas1}
        headerShown={false}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerItemStyle: { display: 'none' },
          drawerLabel: "BoasVindas1",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      /> */}

      <Drawer.Screen
        name="BoasVindas2"
        component={BoasVindas2}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerItemStyle: { display: 'none' },
          drawerLabel: "BoasVindas2",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="BoasVindas3"
        component={BoasVindas3}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerItemStyle: { display: 'none' },
          drawerLabel: "BoasVindas3",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      {/*  rotas principais */}

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
        name="Orders"
        component={Orders}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="users"
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
        name="Comentarios"
        component={Comentarios}
        initialParams={{ comentario: 'oiiii', edit: false }}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="Comentarios"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Faça um comentário",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="RendComent"
        component={RendComent}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="Comentarios"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Comentários",
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
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Login",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      {/* Adicionando a tela de cadastro */}
      <Drawer.Screen
        name="Cadastro"
        component={Register}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="user-plus"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Cadastro",
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
