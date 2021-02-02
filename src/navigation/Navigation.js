import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {Colors} from '../constants/styleConstants';

import Home from '../screens/Home';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const navigationTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
        backgroundColor: Colors.minColor,
      },
    };
  },
};

/**
 * @return {JSX.Element}
 */

const Stacks = () => {
  const {isLogin, userData} = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={(props) => {
        global.Navigation = props;
        return {headerShown: false, ...navigationTransition};
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

/**
 * @return {JSX.Element}
 */

const initNavgtion = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default initNavgtion;
