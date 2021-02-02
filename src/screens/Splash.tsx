import React, {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Colors, Images} from '../constants/styleConstants';
import {commonStyles} from '../styles/styles';
const {width, height} = Dimensions.get('window');
const Splash: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        width,
        height,
        backgroundColor: Colors.minColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{width: width / 2, height: width / 2}}>
        <Text style={{color: '#fff', fontSize: 30}}>Splash</Text>
      </View>
    </View>
  );
};

export default Splash;
