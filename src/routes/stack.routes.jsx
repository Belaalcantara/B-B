import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";

import BoasVindas1 from "../screens/BoasVindas1";
import BoasVindas2 from "../screens/BoasVindas2";
import BoasVindas3 from "../screens/BoasVindas3";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="BoasVindas1" component={BoasVindas1} />
      <Stack.Screen name="BoasVindas2" component={BoasVindas2} />
      <Stack.Screen name="BoasVindas3" component={BoasVindas3} />
    </Stack.Navigator>
  );
};

export default StackRoutes;