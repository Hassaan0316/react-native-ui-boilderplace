import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { iTextStyles } from './interface';
import { colorPalletes } from './Constants';

interface iProps extends iTextStyles, TextProps {
  children?: ReactNode | string;
}

const TextComponent = forwardRef((props: iProps, ref: ForwardedRef<Text>) => {

  const {
    h1, children, h2, h3, h4, b, p, xs, fontFamily, size, color, weight, align, margin, marginVertical, marginHorizontal,
    marginTop, marginBottom, marginRight, marginLeft, padding, paddingHorizontal, paddingVertical, paddingTop, paddingBottom,
    paddingLeft, paddingRight, style,
  } = props;

  const textStyles = StyleSheet.flatten([
    h1 !== undefined && { fontSize: 24, fontWeight: '800' },
    h2 !== undefined && { fontSize: 20, fontWeight: '700' },
    h3 !== undefined && { fontSize: 16, fontWeight: '600' },
    h4 !== undefined && { fontSize: 12, fontWeight: '500' },
    b !== undefined && { fontSize: 24, fontWeight: 'bold' },
    p !== undefined && { fontSize: p },
    xs !== undefined && { fontSize: 13, opacity: 0.5 },
    size !== undefined && { fontSize: size },
    fontFamily !== undefined && { fontFamily: fontFamily },
    color ? { color: color } : { color: colorPalletes.grey },
    weight !== undefined && { fontWeight: weight },
    align !== undefined && { textAlign: align },
    margin !== undefined && { margin: margin },
    marginVertical !== undefined && { marginVertical: marginVertical },
    marginHorizontal !== undefined && { marginHorizontal: marginHorizontal },
    marginTop !== undefined && { marginTop: marginTop },
    marginBottom !== undefined && { marginBottom: marginBottom },
    marginRight !== undefined && { marginRight: marginRight },
    marginLeft !== undefined && { marginLeft: marginLeft },
    padding !== undefined && { padding: margin },
    paddingHorizontal !== undefined && { paddingHorizontal: paddingHorizontal },
    paddingVertical !== undefined && { paddingVertical: paddingVertical },
    paddingTop !== undefined && { paddingTop: paddingTop },
    paddingBottom !== undefined && { paddingBottom: paddingBottom },
    paddingLeft !== undefined && { paddingLeft: paddingLeft },
    paddingRight !== undefined && { paddingRight: paddingRight },
    style,
  ]) as TextStyle;

  return (
    <Text ref={ref} {...props} style={[textStyles]} accessible={props.accessible ?? true}
      allowFontScaling={false}
    >
      {typeof children === 'string' ? children : children}
    </Text>
  );
})

export default TextComponent;