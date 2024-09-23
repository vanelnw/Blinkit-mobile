import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'body';
  fontFamily?: Fonts;
  fontSize?: number;
  style: TextStyle | TextStyle[];
  children?: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: object) => void;
}

const CustomText: React.FC<Props> = ({
  variant = 'body',
  fontFamily = Fonts.Regular,
  fontSize,
  style,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {
  let computerFontSize: number;

  switch (variant) {
    case 'h1':
      computerFontSize = RFValue(fontSize || 22);
      break;
    case 'h2':
      computerFontSize = RFValue(fontSize || 20);
      break;
    case 'h3':
      computerFontSize = RFValue(fontSize || 18);
      break;
    case 'h4':
      computerFontSize = RFValue(fontSize || 16);
      break;
    case 'h5':
      computerFontSize = RFValue(fontSize || 14);
      break;
    case 'h6':
      computerFontSize = RFValue(fontSize || 12);
      break;
    case 'h7':
      computerFontSize = RFValue(fontSize || 12);
      break;
    case 'h8':
      computerFontSize = RFValue(fontSize || 10);
      break;
    case 'h9':
      computerFontSize = RFValue(fontSize || 9);
      break;
    case 'body':
      computerFontSize = RFValue(fontSize || 12);
      break;
  }

  const fontFamilyStyle = {fontFamily};

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        {color: Colors.text, fontSize: computerFontSize},
        fontFamilyStyle,
        style,
      ]}
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
