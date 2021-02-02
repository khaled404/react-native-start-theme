import React, {FC, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts} from '../../constants/styleConstants';
import IconTouchable from '../touchables/IconTouchable';
interface FormModal {
  onButtonPress?: () => void;
  buttonLabel?: string;
}
const FormModal: FC<FormModal> = ({children, onButtonPress, buttonLabel}) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((e) => !e);
  };
  return (
    <>
      <Modal animationType="slide" visible={visible}>
        <TouchableOpacity onPress={toggleModal}>
          <IconTouchable
            name="x"
            style={styles.closeStyle}
            color={Colors.grayDark}
            size={27}
          />
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 35}}>
          {children}
          {buttonLabel && (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                if (onButtonPress) {
                  onButtonPress();
                }
                toggleModal();
              }}>
              <Text style={styles.buttontitle}>{buttonLabel}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </Modal>
      <View>
        <IconTouchable
          name="plus"
          onPress={() => {
            toggleModal();
          }}
          style={styles.iconStyle}
          color={Colors.white}
          size={17}
        />
      </View>
    </>
  );
};

export default FormModal;

const styles = StyleSheet.create({
  iconStyle: {
    width: 40,
    height: 40,
    backgroundColor: Colors.minColor,
    marginLeft: 'auto',
    marginHorizontal: 15,
    marginTop: 10,
  },
  closeStyle: {
    marginHorizontal: 15,
    marginTop: 15,
    backgroundColor: Colors.gray,
    width: 40,
    height: 40,
    marginLeft: 'auto',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Colors.minColor,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontitle: {
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
});
