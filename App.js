import {
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/lato";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

import TabNavigator from "./navigation/TabNavigator";
import humanReducer from "./store/reducers/human";

const rootReducer = combineReducers({
  humans: humanReducer
});

const store = createStore(rootReducer/*, applyMiddleware(ReduxThunk)*/);


export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
        <TabNavigator />
    </Provider>
  );
}

