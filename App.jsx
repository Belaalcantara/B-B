import "react-native-gesture-handler";
import { UserProvider } from "./src/userContext";
import Routes from "./src/routes";


export default function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
}
