import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
  TextStyle,
} from 'react-native';
import React from 'react';
import { ifont } from './interface';
import { ACTIVE_OPACITY, colorPalletes } from './Constants';
import TextComponent from './TextComponent';

interface IPrimaryButton extends TouchableOpacityProps {
  children?: React.ReactNode;
  primaryAlpha?: Boolean;
  primaryBeta?: Boolean;
  primaryDune?: Boolean;
  primarySea?: Boolean;
  textAccessible?: boolean;
  primaryDuneTransparent?: Boolean;
  selected?: Boolean;
  fontTheme?: ifont;
  primaryWithoutAnyBackground?: Boolean;
  titleText: String;
  handlePress?: any;
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  margin?: ViewStyle['margin'];
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginRight?: ViewStyle['marginRight'];
  marginLeft?: ViewStyle['marginLeft'];
  padding?: ViewStyle['padding'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingLeft?: ViewStyle['paddingLeft'];
  paddingRight?: ViewStyle['paddingRight'];
  borderRadius?: ViewStyle['borderRadius'];
  shadowColor?: ViewStyle['shadowColor'];
  shadowOffset?: ViewStyle['shadowOffset'];
  shadowOpacity?: ViewStyle['shadowOpacity'];
  shadowRadius?: ViewStyle['shadowRadius'];
  elevation?: ViewStyle['elevation'];
  style?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  textColor?: string;
  PRIMARY_BUTTON_HEIGHT?: number
}

export default function PrimaryButton({
  children,
  primaryAlpha,
  primaryBeta,
  primaryDune,
  primaryDuneTransparent,
  primarySea,
  selected,
  textAccessible,
  fontTheme,
  primaryWithoutAnyBackground,
  handlePress,
  titleText,
  color,
  align,
  justify,
  width,
  height,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  borderRadius,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  style,
  titleTextStyle,
  loading,
  textColor,
  PRIMARY_BUTTON_HEIGHT,
  ...props
}: IPrimaryButton) {
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    width !== undefined && { width: width },
    height !== undefined && { height: height },
    margin !== undefined && { margin: margin },
    marginVertical !== undefined && { marginVertical: marginVertical },
    marginHorizontal !== undefined && { marginHorizontal: marginHorizontal },
    marginTop !== undefined && { marginTop: marginTop },
    marginBottom !== undefined && { marginBottom: marginBottom },
    marginRight !== undefined && { marginRight: marginRight },
    marginLeft !== undefined && { marginLeft: marginLeft },
    padding !== undefined && { padding: padding },
    paddingHorizontal !== undefined && { paddingHorizontal: paddingHorizontal },
    paddingVertical !== undefined && { paddingVertical: paddingVertical },
    paddingTop !== undefined && { paddingTop: paddingTop },
    paddingBottom !== undefined && { paddingBottom: paddingBottom },
    paddingLeft !== undefined && { paddingLeft: paddingLeft },
    paddingRight !== undefined && { paddingRight: paddingRight },
    borderRadius !== undefined && { borderRadius: borderRadius },
    shadowColor !== undefined && { shadowColor: shadowColor },
    shadowOffset !== undefined && { shadowOffset: { width: 0, height: 8 } },
    shadowOpacity !== undefined && { shadowOpacity: shadowOpacity },
    shadowRadius !== undefined && { shadowRadius: shadowRadius },
    elevation !== undefined && { elevation: elevation },
    color !== undefined && { backgroundColor: color },
    style,
  ]);

  const renderButtonComponent = () => {
    if (primaryAlpha != undefined) {
      return (
        <TouchableOpacity
          accessible={props.accessible ?? true}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
          style={[
            {
              height: PRIMARY_BUTTON_HEIGHT,
              width: width ? width : '100%',
              backgroundColor: selected ? colorPalletes.white : colorPalletes['alAdaam-80'],
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              alignSelf: 'center',
              zIndex: 1,
              paddingHorizontal: paddingHorizontal ? paddingHorizontal : 'auto',
              paddingVertical: paddingVertical ? paddingVertical : 'auto',
            },
            selected && {
              backgroundColor: colorPalletes.white,
              borderWidth: 1,
              borderColor: colorPalletes['alAdaam-80'],
            },
            style,
            props.disabled && { borderWidth: 0, backgroundColor: colorPalletes['grey-60'] },
          ]}
          {...props}
          disabled={loading || props.disabled}>
          {loading ? (
            <ActivityIndicator color={colorPalletes.white} />
          ) : (
            <TextComponent
              align="center"
              accessible={textAccessible ?? true}
              style={[titleTextStyle]}
              color={textColor ? textColor : selected ? colorPalletes['alAdaam-80'] : colorPalletes.white}>
              {titleText}
            </TextComponent>
          )}
        </TouchableOpacity>
      );
    }
    if (primaryBeta != undefined) {
      return (
        <TouchableOpacity
          accessible={props.accessible || true}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
          {...props}
          style={[
            {
              height: PRIMARY_BUTTON_HEIGHT,
              width: width ? width : '100%',
              backgroundColor: selected ? colorPalletes.palm : colorPalletes['skyline-50'],
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colorPalletes.palm,
              alignSelf: 'center',
              zIndex: 1,
            },
            style,
          ]}>
          <TextComponent
            accessible={textAccessible ?? true}
            align="center"
            color={selected ? colorPalletes.white : colorPalletes.palm}
            style={[titleTextStyle]}>
            {titleText}
          </TextComponent>
        </TouchableOpacity>
      );
    }
    if (primaryWithoutAnyBackground != undefined) {
      return (
        <TouchableOpacity
          accessible={props.accessible || true}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
          {...props}
          style={[
            {
              height: PRIMARY_BUTTON_HEIGHT,
              width: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              zIndex: 1,
            },
          ]}>
          <TextComponent
            accessible={textAccessible ?? true}
            align="center"
            color={colorPalletes['alAdaam-80']}
            style={[titleTextStyle]}>
            {titleText}
          </TextComponent>
        </TouchableOpacity>
      );
    }
    if (primaryDune != undefined) {
      return (
        <TouchableOpacity
          accessible={props.accessible || true}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
          style={[
            {
              height: height || PRIMARY_BUTTON_HEIGHT,
              width: width || '100%',
              backgroundColor: selected ? colorPalletes['dune-20'] : 'transparent',
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: selected ? colorPalletes.dune : colorPalletes['grey-60'],
              zIndex: 1,
            },
          ]}
          {...props}>
          <TextComponent
            accessible={textAccessible ?? true}
            align="center"
            color={colorPalletes['grey-60']}
            style={[fontTheme || titleTextStyle]}>
            {titleText}
          </TextComponent>
        </TouchableOpacity>
      );
    }
    if (primaryDuneTransparent != undefined) {
      return (
        <TouchableOpacity
          accessible={props.accessible || true}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
          {...props}
          style={[
            {
              height: height || PRIMARY_BUTTON_HEIGHT,
              width: width || '100%',
              backgroundColor: colorPalletes['skyline-50'],
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colorPalletes['grey-60'],
              zIndex: 1,
            },
          ]}>
          <TextComponent
            accessible={textAccessible ?? true}
            align="center"
            color={colorPalletes['grey-60']}
            style={[titleTextStyle]}>
            {titleText}
          </TextComponent>
        </TouchableOpacity>
      );
    }
    if (primarySea != undefined) {
      return (
        <TouchableOpacity
          accessible={props.accessible || true}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
          {...props}
          style={[
            {
              height: PRIMARY_BUTTON_HEIGHT,
              width: width ? width : '100%',
              backgroundColor: selected ? colorPalletes.sea : colorPalletes['skyline-50'],
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: !selected ? 1 : 0,
              borderColor: colorPalletes.sea,
              alignSelf: 'center',
            },
            style,
          ]}>
          <TextComponent
            accessible={textAccessible ?? true}
            align="center"
            color={selected ? colorPalletes.white : colorPalletes.sea}
            style={[titleTextStyle]}>
            {titleText}
          </TextComponent>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity style={buttonStyle} {...props}>
        <Text>{titleText}</Text>
      </TouchableOpacity>
    );
  };

  return renderButtonComponent();
}
