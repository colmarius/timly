import React from 'react';
import { Appbar } from 'react-native-paper';

import { icons, noop } from './lib';

const AppBar = () => (
  <Appbar.Header>
    <Appbar.Action icon={icons.filter} onPress={noop} />
    <Appbar.Content title="Timly" />
    <Appbar.Action icon={icons.magnify} onPress={noop} />
    <Appbar.Action icon={icons.more} onPress={noop} />
  </Appbar.Header>
);

export default AppBar;
