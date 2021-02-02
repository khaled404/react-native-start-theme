import {transform} from '@babel/core';
import React, {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Fonts, Colors} from '../../constants/styleConstants';
import Touchable from '../touchables/Touchable';
const {height} = Dimensions.get('screen');
interface ISelectbox {
  label: string;
  data: any;
  onselected?: (arg: any) => void;
}
const Selectbox: FC<ISelectbox> = ({label, data, onselected}) => {
  const [state, setstate] = useState({
    slide: new Animated.Value(0),
    visible: false,
    active: NaN,
    value: '',
  });
  useEffect(() => {
    setstate((old) => ({...old, active: NaN, value: ''}));
  }, [data]);
  const toggleSelect = () => {
    Animated.spring(state.slide, {
      toValue: state.visible ? 0 : 1,
      bounciness: 4,
      useNativeDriver: true,
    }).start();
    setstate((old) => ({...old, visible: !old.visible}));
  };
  const transform = [
    {
      translateY: state.slide.interpolate({
        inputRange: [0, 0, 1],
        outputRange: [0, height, 0],
      }),
    },
  ];

  const selectHandler = (item: any, index: any) => {
    setstate((old) => ({...old, active: index, value: item.name}));
    toggleSelect();
    if (onselected) {
      onselected(item);
    }
  };
  return (
    <>
      <Modal visible={state.visible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={toggleSelect}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#00000069',
              padding: 15,
              alignItems: 'center',
            }}>
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  transform,
                },
              ]}>
              <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{padding: 20}}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}: any) => (
                  <TouchableOpacity onPress={() => selectHandler(item, index)}>
                    <View style={styles.listItem}>
                      <Text style={styles.title}>{item.name}</Text>
                      {state.active === index && (
                        <Icon name="check" size={17} color={Colors.grayDark} />
                      )}
                    </View>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.selectBoxContainer}>
        <Touchable onPress={toggleSelect}>
          <View style={styles.selectBoxContent}>
            <Text style={styles.title}>
              {state.value ? state.value : label}
            </Text>
            <Icon name="sort-down" size={20} color={Colors.grayDark} />
          </View>
        </Touchable>
      </View>
    </>
  );
};

export default Selectbox;

const styles = StyleSheet.create({
  selectBoxContainer: {
    marginBottom: 20,
    backgroundColor: Colors.gray,
    borderRadius: 15,
  },
  selectBoxContent: {
    paddingVertical: 23,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Fonts.medium,
    color: Colors.grayDark,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    width: '100%',
    minHeight: 100,
    maxHeight: height / 1.3,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom: 30,
  },
  listItem: {
    paddingVertical: 15,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
