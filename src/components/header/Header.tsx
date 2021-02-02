import React, {FC, useState} from 'react';
import {StyleSheet, View, Platform, Text, I18nManager} from 'react-native';
import {
  Colors,
  Fonts,
  Images,
  ScreenOptions,
} from '../../constants/styleConstants';
import FastImage from 'react-native-fast-image';
import IconTouchable from '../touchables/IconTouchable';
import {useTranslation} from 'react-i18next';
import {commonStyles} from '../../styles/styles';
import {NavigationProps} from '../../constants/interfaces';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {ClearStateHandler} from '../../store/actions/addProduct';
import {
  CreateFolderHandler,
  GalleryPicImageHandler,
} from '../../store/actions/gallery';
import AddFolderModal from '../Gallery/AddFolderModal';
import {RootState} from '../../store/store';
const {isRTL} = I18nManager;
interface IHeader {
  backArrowOnPress?: () => void;
}
const Header: FC<NavigationProps & IHeader> = ({
  openDrawer,
  navigate,
  goBack,
  name,
  params,
  backArrowOnPress,
}) => {
  const {t} = useTranslation();
  const validation = useState({
    arrow:
      name === 'Home' ||
      name === 'Store' ||
      name === 'Products' ||
      name === 'Sales',
    search: name === 'Home',
  })[0];
  const [state, setstate] = useState({
    addFolderModalVisible: false,
  });
  const dispatch = useDispatch();
  const {path}: any = useSelector<RootState>((state) => state.gallery);
  return (
    <View style={styles.conatiner}>
      <AddFolderModal
        onSubmit={(name: string) => dispatch(CreateFolderHandler(name, path))}
        visible={state.addFolderModalVisible}
        onPress={() =>
          setstate((old) => ({...old, addFolderModalVisible: false}))
        }
      />
      <View style={commonStyles.rowBox}>
        {name !== 'Gallery' && (
          <IconTouchable
            name="menu"
            color={Colors.white}
            size={22}
            onPress={openDrawer}
          />
        )}
        <View style={styles.titleConatiner}>
          {name === 'Home' && (
            <View style={styles.imageConatiner}>
              <FastImage
                style={commonStyles.image}
                source={Images.logo}
                resizeMode="contain"
              />
            </View>
          )}
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {params?.headerTitle ? params.headerTitle : t(name)}
          </Text>
        </View>
      </View>
      <View style={commonStyles.rowBox}>
        {name === 'Products' && (
          <IconTouchable
            name="plus"
            color={Colors.white}
            size={22}
            onPress={() => {
              dispatch(ClearStateHandler());
              navigate('AddProduct');
            }}
          />
        )}
        {validation.search && (
          <IconTouchable
            name="search"
            color={Colors.white}
            size={RFValue(22)}
            onPress={() => {
              // navigate('Search')
            }}
          />
        )}
        {name === 'Gallery' && (
          <IconTouchable
            name="upload"
            color={Colors.white}
            size={22}
            onPress={() => {
              dispatch(GalleryPicImageHandler(path));
            }}
          />
        )}
        {name === 'Gallery' && (
          <IconTouchable
            name="folder-plus"
            color={Colors.white}
            size={22}
            onPress={() => {
              setstate((old) => ({...old, addFolderModalVisible: true}));
              // navigate('Search')
            }}
          />
        )}
        {!validation.arrow && (
          <IconTouchable
            name={isRTL ? 'arrow-left' : 'arrow-right'}
            color={Colors.white}
            size={22}
            onPress={backArrowOnPress !== undefined ? backArrowOnPress : goBack}
          />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: Colors.minColor,
    paddingTop: ScreenOptions.StatusBarHeight,
    height:
      Platform.OS === 'android'
        ? 56 + ScreenOptions.StatusBarHeight
        : 64 + ScreenOptions.StatusBarHeight,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    ...commonStyles.rowBox,
    zIndex: 200,
  },
  imageConatiner: {
    width: 29,
    height: 28,
  },
  titleConatiner: {
    ...commonStyles.rowBox,
    height: 28,
    width: '60%',
    marginLeft: 3,
  },
  title: {
    fontSize: RFValue(20),
    color: Colors.white,
    fontFamily: Fonts.bold,
    marginLeft: 5,
  },
});
