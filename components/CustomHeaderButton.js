import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = props => {
  return <HeaderButton {...props} IconComponent={Ionicons} iconSize={24} />;
};

export default CustomHeaderButton;
