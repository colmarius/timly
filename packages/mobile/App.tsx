import { HelloWorld, theme } from 'app';
import { DripsyProvider } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

const App = () => {
  return (
    <PaperProvider>
      <DripsyProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar style="dark" />
          <HelloWorld />
        </SafeAreaProvider>
      </DripsyProvider>
    </PaperProvider>
  );
};

export default App;
