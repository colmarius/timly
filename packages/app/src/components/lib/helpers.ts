import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export const noop = () => {};

export const icons = {
  filter: 'filter',
  more: isIOS ? 'dots-horizontal' : 'dots-vertical',
  magnify: 'magnify',
};
