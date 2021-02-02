import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Touchable from './Touchable';
import Icon from 'react-native-vector-icons/Feather';
interface Props {
  color?: string;
  size?: number;
  name: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  iconStyle?: StyleProp<ViewStyle>;
}
const IconTouchable: FC<Props> = ({
  color,
  size,
  name,
  style,
  onPress,
  iconStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Touchable onPress={onPress}>
        <View style={[styles.iconContainer, iconStyle]}>
          <Icon name={name} size={size} color={color} />
        </View>
      </Touchable>
    </View>
  );
};

export default IconTouchable;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
