import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../constants/styleConstants';
import Button from '../touchables/Button';
interface IScreenEmpty {
  title?: string;
  buttonTitle?: string;
  buttonOnPress?: () => void;
  iconName?: string;
}
const ScreenEmpty: FC<IScreenEmpty> = ({
  buttonTitle,
  buttonOnPress,
  title,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <View style={styles.iconContainer}>
          <Icon name={iconName} color={Colors.grayDark} size={75} />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      {buttonTitle && <Button title={buttonTitle} onPress={buttonOnPress} />}
    </View>
  );
};

export default ScreenEmpty;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize: 20,
    marginVertical: 20,
    color: Colors.grayDark,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
