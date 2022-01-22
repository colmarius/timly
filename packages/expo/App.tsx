import { HelloWorld } from 'app/hello-world';
import { theme } from 'app/theme';
import { DripsyProvider } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

export const App = () => {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <HelloWorld />
      </SafeAreaProvider>
    </DripsyProvider>
  );
};
