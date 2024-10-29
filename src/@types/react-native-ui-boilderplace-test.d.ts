declare module 'react-native-ui-boilderplace' {
  export { default as Block } from '../Block';
  export { default as TextComponent } from '../TextComponent';
  export { default as PrimaryButton } from '../PrimaryButton';
  export { default as ButtonGroup } from '../ButtonGroup';
  export { default as RadioButton } from '../RadioButton';
  export { default as TouchableBlock } from '../TouchableBlock';
  export { default as ToggleButton } from '../ToggleButton';
  export { default as CheckBoxComponent } from '../CheckBoxComponent';
  export { default as LinearProgress } from '../ProgressBars/LinearProgress';
  export { default as CircularProgressBar } from '../ProgressBars/CircularProgressBar';
  export { default as Divider } from '../Divider';
  export { useDebounce } from '../Hooks/useDebounce';
  export { useKeyboard } from '../Hooks/useKeyboard';
  export { default as FullPageLoader } from '../Loaders/FullPageLoader';
  export { default as LoadingIndicator } from '../Loaders/LoadingIndicator';
  export { default as Refresh } from '../Loaders/Refresh';
  export function multiply(a: number, b: number): number;
}
