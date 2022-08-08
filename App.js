import {
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/lato';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Text from './components/Text';
import TabNavigator from './navigation/TabNavigator';
import { persistor, store } from './store';

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
      <PersistGate
        persistor={persistor}
        loading={
          <Text variant="h2" center>
            Loading...
          </Text>
        }
      >
        <TabNavigator />
      </PersistGate>
    </Provider>
  );
}
