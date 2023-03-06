import React from 'react';
import { View } from 'react-native';
import { theme, darkTheme, Theme } from '../globals/Theme';

const ItemSeprator = () => {
    return <View style={{
        height: 2,
        width: "100%",
        backgroundColor: theme.colors.black,
        marginEnd: 5,
        marginStart: 5
    }} />;
};

export default ItemSeprator;