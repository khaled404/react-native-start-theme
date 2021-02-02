import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts, Images} from '../../constants/styleConstants';
import {useTranslation} from 'react-i18next';
import {ScreenProps} from '../../constants/interfaces';
import DrawerItem from './DrawerItem';
import {tabsNavigation} from '../../constants/helpers';
import {RFValue} from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import {commonStyles} from '../../styles/styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {LogoutHandler} from '../../store/actions/auth';

const DrawerContent: FC<ScreenProps> = ({navigation}) => {
  // const {replace} = navigation;
  const dispatch = useDispatch();
  const {userData}: any = useSelector<RootState>((state) => state.auth);

  const {t}: any = useTranslation();
  return (
    <ScrollView>
      <View style={styles.userConatiner}>
        <View style={styles.iconConatiner}>
          <FastImage
            source={Images.logo}
            resizeMode="contain"
            style={commonStyles.image}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            // navigate('LogIn');
          }}>
          <Text
            style={
              styles.title
            }>{`${userData.firstname} ${userData.lastname}`}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navgtionContainer}>
        <DrawerItem
          onPress={() => tabsNavigation('Home')}
          icon="home"
          title={t('Home')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('Profile')}
          icon="user"
          title={t('Profile')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('Ratings')}
          icon="star"
          title={t('Ratings')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('CustomerInquiries')}
          icon="help-circle"
          title={t('CustomerInquiries')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('ManagementMessages')}
          icon="inbox"
          title={t('ManagementMessages')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('ShippingRates')}
          icon="truck"
          title={t('ShippingRates')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('SubscriptionPlan')}
          icon="trending-up"
          title={t('SubscriptionPlan')}
        />
        <DrawerItem
          onPress={() => navigation?.navigate('SubscriptionBill')}
          icon="file-text"
          title={t('SubscriptionBill')}
        />
        <DrawerItem
          onPress={() => {}}
          icon="user-minus"
          title={t('RemoveSeller')}
        />

        <DrawerItem
          onPress={() => {
            dispatch(LogoutHandler());
          }}
          icon="x"
          title={t('Logout')}
        />
      </View>
    </ScrollView>
  );
};

export default DrawerContent;
const styles = StyleSheet.create({
  userConatiner: {
    width: '100%',
    backgroundColor: Colors.minColor,
    height: 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  iconConatiner: {
    width: 80,
    height: 80,
  },
  title: {
    color: Colors.white,
    fontSize: RFValue(14),
    fontFamily: Fonts.medium,
    marginTop: 8,
  },
  navgtionContainer: {},
});
