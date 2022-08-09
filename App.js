import {
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/lato';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Text from './components/Text';
import TabNavigator from './navigation/TabNavigator';
import { setupStore } from './store';

const store = setupStore();
const persistor = persistStore(store);

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
