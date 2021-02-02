import React, {FC, useEffect, useState, useMemo, memo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {axiosInstance} from '../../constants/Config';
import {Colors, Fonts} from '../../constants/styleConstants';
import Touchable from '../touchables/Touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {AsyncKeys, getItem} from '../../constants/helpers';
import {useTranslation} from 'react-i18next';
const icons = {
  search: {
    name: 'search', // search input
    size: 24,
  },
  arrowUp: {
    name: 'keyboard-arrow-up', // dropdown toggle
    size: 22,
  },
  arrowDown: {
    name: 'keyboard-arrow-down', // dropdown toggle
    size: 22,
  },
  selectArrowDown: {
    name: 'keyboard-arrow-down', // select
    size: 24,
  },
  close: {
    name: 'close', // chip close
    size: 16,
  },
  check: {
    name: 'check', // selected item
    size: 16,
  },
  cancel: {
    name: 'cancel', // cancel button
    size: 18,
  },
};

interface IMultiSelect {
  label: string;
  multiSelectEndPoint: 'manufacturer' | 'category' | 'download' | 'filter';
  selected?: (arg: any) => void;
}

const MultiSelect: FC<IMultiSelect> = memo(
  ({label, multiSelectEndPoint, selected}) => {
    const [state, setstate] = useState({
      kays: [],
      value: label,
      ref: {},
    });
    const {t} = useTranslation();
    const onTextChange = async (text?: string) => {
      const cookie = await getItem(AsyncKeys.COOKIE);
      try {
        const {data} = await axiosInstance(
          `sellerproduct/${multiSelectEndPoint}&filter_name=${
            text ? text : ''
          }&cookie=${cookie}`,
        );
        setstate((old) => ({...old, kays: data}));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      if (state.kays.length === 0) {
        onTextChange();
      }
    }, []);
    return useMemo(
      () => (
        <View>
          <SectionedMultiSelect
            items={state.kays}
            IconRenderer={Icon}
            icons={icons}
            uniqueKey="name"
            subKey="children"
            selectText={state.value}
            confirmText={t('Close')}
            // showDropDowns={true}
            // readOnlyHeadings={true}
            styles={{
              selectToggle: styles.selectBoxContainer,
              selectToggleText: {textAlign: 'left', fontFamily: Fonts.medium},
            }}
            ref={(r) => (state.ref = r)}
            // onSelectedItemsChange={onKayChange}
            onSelectedItemsChange={(item) => {
              setstate((old) => ({...old, value: item[0]}));
              state.ref?._toggleSelector();
            }}
            searchPlaceholderText={label}
            searchAdornment={(text: string) => {
              if (text.length) {
                onTextChange(text);
              }
            }}
          />
        </View>
      ),
      [state.kays, state.value],
    );
  },
);

export default MultiSelect;

const styles = StyleSheet.create({
  selectBoxContainer: {
    marginBottom: 20,
    backgroundColor: Colors.gray,
    borderRadius: 15,
    paddingVertical: 23,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: Fonts.medium,
    color: Colors.grayDark,
  },
});
