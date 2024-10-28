import { ForwardedRef, forwardRef } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { iViewStyles } from './interface';
import { ACTIVE_OPACITY } from './Constants';

interface iProps extends iViewStyles, TouchableOpacityProps {
  activeOpacity?: number
}

const TouchableBlock = forwardRef((props: iProps, ref: ForwardedRef<any>) => {
  const {
    children, flex, gap, rowGap, columnGap, display, position, row, color, align, justify, width, height, margin,
    marginVertical, marginHorizontal, marginTop, marginBottom, marginRight, marginLeft, overflow, padding, paddingHorizontal,
    paddingVertical, paddingTop, paddingBottom, paddingLeft, paddingRight, borderRadius, borderColor, borderWidth, shadowColor,
    shadowOffset, shadowOpacity, shadowRadius, elevation, backgroundColor, style, left, top, right, bottom, opacity, flexWrap,
    alignSelf, activeOpacity, flexDirection
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
    row !== undefined && { flexDirection: 'row' },
    flexDirection !== undefined && { flexDirection: flexDirection },
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
    borderRadius !== undefined ? { borderRadius: borderRadius } : { borderRadius: 10 },
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
    style,
  ]) as ViewStyle;

  return (
    <TouchableOpacity
      {...props}
      ref={ref}
      activeOpacity={activeOpacity || ACTIVE_OPACITY}
      accessible={props.accessible ?? true}
      style={[viewStyles]}
    >
      {children}
    </TouchableOpacity>
  )
})

export default TouchableBlock