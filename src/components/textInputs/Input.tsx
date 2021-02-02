import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Colors, Fonts} from '../../constants/styleConstants';

interface Props {
  options?: TextInputProps & {ref?: (ref: any) => void};
  contentContainerStyle?: StyleProp<ViewStyle>;
  textInputContainer?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = ({
  options,
  contentContainerStyle,
  textInputContainer,
}) => {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      <TextInput
        {...options}
        style={[styles.textInputContainer, textInputContainer]}
        placeholderTextColor={Colors.grayDark}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: Colors.gray,
    borderRadius: 15,
    padding: 10,
  },
  textInputContainer: {
    fontFamily: Fonts.medium,
    color: Colors.dark,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
