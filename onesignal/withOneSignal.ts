/**
 * Expo config plugin for One Signal
 * @see https://documentation.onesignal.com/docs/react-native-sdk-setup#step-4-install-for-ios-using-cocoapods-for-ios-apps
 */

import type { ConfigPlugin } from '@expo/config-plugins';
import type { OneSignalPluginProps } from '../types/types';

import { withOneSignalIos } from './withOneSignalIos';

const withOneSignal: ConfigPlugin<OneSignalPluginProps> = (config, props) => {
  config = withOneSignalIos(config, props);

  return config;
};

export default withOneSignal;