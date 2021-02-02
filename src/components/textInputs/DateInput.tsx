import React, {FC, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInputProps,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../../constants/styleConstants';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Input from './Input';
interface IDateInput {
  options?: TextInputProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  ref?: any;
  onConfirm?: (date: any) => void;
  onCancel?: () => void;
}
const DateInput: FC<IDateInput> = ({
  options,
  contentContainerStyle,
  containerStyle,
  ref,
  onConfirm,
  onCancel,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setIsVisible(true);
      }}>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={(date: any) => {
          setIsVisible(false);
          if (onConfirm) {
            onConfirm(date);
          }
        }}
        onCancel={() => {
          setIsVisible(false);
          if (onCancel) {
            onCancel();
          }
        }}
      />
      <View style={[styles.container, containerStyle]}>
        <Input
          ref={ref}
          options={{...options, editable: false}}
          contentContainerStyle={[styles.inputStyle, contentContainerStyle]}
          textInputContainer={{paddingHorizontal: 5}}
        />
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon color={Colors.minColor} name="calendar" size={27} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: Colors.gray,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 20,
  },
  inputStyle: {
    flex: 1,
    borderRadius: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
