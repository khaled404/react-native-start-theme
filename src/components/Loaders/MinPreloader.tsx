import React, {FC} from 'react';
import {Dimensions, Modal, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/styleConstants';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
const {width} = Dimensions.get('screen');
const MinPreloader: FC = () => {
  const {preloaderVisible}: any = useSelector<RootState>(
    (state) => state.settings,
  );
  return (
    <Modal animationType="fade" visible={preloaderVisible}>
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
        }}>
        <LottieView
          source={require('../../../assets/animation/shop.json')}
          autoPlay
          loop
          style={{width: width / 2, height: width / 2}}
        />
      </View>
    </Modal>
  );
};

export default MinPreloader;

const styles = StyleSheet.create({});
