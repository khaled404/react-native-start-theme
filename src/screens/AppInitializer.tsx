import React, {FC, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Splash from './Splash';
import Navigation from '../navigation/Navigation';
import {RootState} from '../store/store';
import {initializApp} from '../store/actions/settings';
const AppInitializer: FC = () => {
  const {appLoaded} = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!appLoaded) {
      dispatch(initializApp());
    }
  }, []);
  if (appLoaded) {
    return <Navigation />;
  } else {
    return <Splash />;
  }
};

export default AppInitializer;
