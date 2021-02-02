import React, {FC} from 'react';
import {View, ScrollView, StyleProp, ViewStyle} from 'react-native';
import {NavigationProps} from '../../constants/interfaces';
import {Colors} from '../../constants/styleConstants';
import Header from '../header/Header';

interface containerProps {
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp<ViewStyle>;
  navigation?: NavigationProps;
  backArrowOnPress?: () => void;
}
interface contentProps {
  noPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  paddingVertical?: boolean;
  children?: JSX.Element[] | JSX.Element;
}
export const Container: FC<containerProps> = ({
  children,
  style,
  navigation,
  backArrowOnPress,
}) => {
  return (
    <View style={[{flex: 1}, style]}>
      {navigation && (
        <Header {...navigation} backArrowOnPress={backArrowOnPress} />
      )}
      {children}
    </View>
  );
};
export const Content: FC<contentProps> = ({
  children,
  noPadding,
  style,
  contentContainerStyle,
  paddingVertical,
}) => {
  return (
    <ScrollView
      style={style}
      contentContainerStyle={[
        paddingVertical && {paddingVertical: 30},
        contentContainerStyle,
      ]}>
      <View style={{paddingHorizontal: noPadding ? undefined : 10}}>
        {children}
      </View>
    </ScrollView>
  );
};
