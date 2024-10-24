import { StyleSheet, type ViewStyle, View, ViewProps } from 'react-native';
import { colorPalletes } from './Constants';
import { iViewStyles } from './interface';
import { ForwardedRef, forwardRef } from 'react';

export interface iBlockProps extends iViewStyles, ViewProps { }

const Block = forwardRef((props: iBlockProps, ref: ForwardedRef<any>) => {
  const {
    children,
    flex,
    gap,
    rowGap,
    columnGap,
    display,
    position,
    row,
    shadow,
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
    overflow,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderRadius,
    borderColor,
    borderWidth,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    backgroundColor,
    style,
    left,
    top,
    right,
    bottom,
    opacity,
    flexWrap,
    alignSelf,
    zIndex,
  } = props;

  const viewStyles = StyleSheet.flatten([
    top !== undefined && { top },
    left !== undefined && { left },
    right !== undefined && { right },
    bottom !== undefined && { bottom },
    opacity !== undefined && { opacity },
    flex !== undefined && { flex },
    gap !== undefined && { gap },
    rowGap !== undefined && { rowGap },
    columnGap !== undefined && { columnGap },
    row !== undefined && { flexDirection: row ? 'row' : 'column' },
    display ? display : { display: 'flex' },
    position ? position : { position: 'relative' },
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    alignSelf !== undefined && { alignSelf: alignSelf },
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
    borderRadius !== undefined ? borderRadius : 10,
    borderWidth !== undefined && { borderWidth: borderWidth },
    borderColor !== undefined && { borderColor: borderColor },
    shadowColor !== undefined && { shadowColor: shadowColor },
    shadowOffset !== undefined && { shadowOffset: { width: 0, height: 8 } },
    shadowOpacity !== undefined && { shadowOpacity: shadowOpacity },
    shadowRadius !== undefined && { shadowRadius: shadowRadius },
    elevation !== undefined && { elevation: elevation },
    backgroundColor !== undefined && { backgroundColor },
    overflow !== undefined && { overflow },
    flexWrap !== undefined && { flexWrap },
    zIndex !== undefined && { zIndex },
  ]) as ViewStyle;

  return (
    <View
      ref={ref}
      accessible={props.accessible ?? false}
      style={[
        shadow && dynamicStyles(shadowColor).shadowStyle,
        viewStyles,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
});

const dynamicStyles = (shadowColor: ViewStyle['shadowColor']) =>
  StyleSheet.create({
    shadowStyle: {
      shadowColor: shadowColor || colorPalletes['grey-40'],
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.21,
      shadowRadius: 3.97,
      elevation: 4,
    },
  });

export default Block;
