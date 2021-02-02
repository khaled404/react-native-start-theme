import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, Fonts} from '../../constants/styleConstants';
interface ICheckBox {
  active?: boolean;
  label: string;
  onPress?: () => void;
}
const CheckBox: FC<ICheckBox> = ({active, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Icon
        name={active ? 'check-circle' : 'circle'}
        solid={active}
        color={active ? Colors.minColor : Colors.gray}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontFamily: Fonts.medium,
    color: Colors.dark,
    marginRight: 10,
  },
});
