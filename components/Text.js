import { Text as RNText, StyleSheet } from 'react-native';

const Text = ({ center, bold, variant = 'body', style, ...rest }) => {
  return (
    <RNText
      {...rest}
      allowFontScaling={false}
      style={[
        { marginBottom: 8 },
        textStyles.base,
        textStyles[variant],
        center && textStyles.center,
        bold && textStyles.bold,
        style,
      ]}
    />
  );
};

export const textStyles = StyleSheet.create({
  base: { fontFamily: 'Lato_400Regular' },
  h1: { fontSize: 30 },
  h2: { fontSize: 24 },
  subtitle: { fontSize: 18 },
  body: { fontSize: 16 },
  caption: { fontSize: 14 },
  note: { fontSize: 12 },
  center: { textAlign: 'center' },
  bold: { fontWeight: '700', fontFamily: 'Lato_700Bold' },
});

export default Text;
