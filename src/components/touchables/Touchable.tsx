import React, {FC} from 'react';
import {RectButton} from 'react-native-gesture-handler';

interface Props {
  dark?: boolean;
  onPress?: () => void;
  children?: JSX.Element;
}

const Touchable: FC<Props> = ({dark, onPress, children}) => {
  return (
    <RectButton onPress={onPress} rippleColor={dark ? undefined : '#ffffff66'}>
      {children}
    </RectButton>
  );
};

export default Touchable;
