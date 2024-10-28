import { Dimensions, Platform } from "react-native";

export const colorPalletes = {
  'black': '#000000',
  'white': '#ffffff',
  'sunrise': '#FDF49E',

  'alAdaam': '#791D33',
  'alAdaam-80': '#954457',
  'alAdaam-60': '#AD6E7C',
  'alAdaam-40': '#C79CA5',
  'alAdaam-20': '#E5CDCF',

  'palm': '#009C80',
  'palm-80': '#34A58E',
  'palm-60': '#65BBA7',
  'palm-40': '#98D1C0',
  'palm-20': '#CCE7DC',

  'skyline': '#193A50',
  'skyline-80': '#3E6172',
  'skyline-60': '#698692',
  'skyline-50': '#F3F5F6',
  'skyline-40': '#99ADB3',
  'skyline-20': '#CBD5D6',
  'skyline-10': '#E8EBED',
  'skyline-3': 'F7F9FA',

  'dune': '#A29475',
  'dune-80': '#ADA389',
  'dune-60': '#C2B9A4',
  'dune-40': '#D6D0BF',
  'dune-20': '#EDE9DE',

  'sea': '#4194B3',
  'sea-80': '#67A9C2',
  'sea-60': '#8DBFD1',
  'sea-40': '#B3D4E1',
  'sea-20': '#D9EAF0',

  'grey': '#333333',
  'grey-80': '#666666',
  'grey-60': '#999999',
  'grey-40': '#CCCCCC',
  'grey-55': '#737373',
  'grey-20': '#E5E5E5',

  'shadowPointFive': 'rbg(0, 0, 0, 0.15)',
};

export const { width: screenWidth, height: screenheight } = Dimensions.get('window');
export const IsIPAD = screenWidth >= 1000 || screenheight >= 1000;
export const PlatformIOS = Platform.OS === 'ios';
export const PlatformAndroid = Platform.OS === 'android';
export const isTablet = IsIPAD && PlatformAndroid;
export const ACTIVE_OPACITY = 0.6;
export const PRIMARY_BUTTON_HEIGHT = IsIPAD ? 72 : 48;