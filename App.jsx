import "react-native-gesture-handler";
import { userProvider } from "./src/userContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <userProvider>
      <Routes/>
    </userProvider>
  );
}
