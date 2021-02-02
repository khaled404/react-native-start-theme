import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Touchable from './Touchable';
import {TouchableProps} from '../../constants/interfaces';
import {Colors, Fonts} from '../../constants/styleConstants';
interface Props extends TouchableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<Props> = ({dark, onPress, title, style}) => {
  return (
    <Touchable dark={dark} onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Touchable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Colors.minColor,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
});
