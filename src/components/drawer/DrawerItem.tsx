import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from '../touchables/Touchable';
import {Colors, Fonts} from '../../constants/styleConstants';
import Icon from 'react-native-vector-icons/Feather';
import {commonStyles} from '../../styles/styles';
import {RFValue} from 'react-native-responsive-fontsize';
interface Props {
  onPress: () => void;
  icon: string;
  title: string;
}
const DrawerItem: FC<Props> = ({onPress, icon, title}) => (
  <Touchable dark onPress={onPress}>
    <View style={styles.list}>
      <Icon
        name={icon}
        size={RFValue(20)}
        color={Colors.grayDark}
        style={styles.listIcon}
      />
      <Text style={styles.listText}>{title}</Text>
    </View>
  </Touchable>
);

export default DrawerItem;
const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 13,
    ...commonStyles.rowBox,
  },
  listIcon: {
    marginRight: 10,
  },
  listText: {
    fontFamily: Fonts.medium,
    fontSize: RFValue(15),
    color: Colors.grayDark,
  },
});
