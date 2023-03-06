import { layout } from '@shopify/restyle';
import React from 'react';
import { View } from 'react-native';
import { theme, darkTheme, Theme } from '../globals/Theme';
import { appStyles } from '../globals/AppStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    createText
} from '@shopify/restyle';
const Text = createText<Theme>();

type ChipProps = {
    text?: string;
};

const Chip = (props: ChipProps) => {
    return <Text variant="body" style={{
        height: 20,
        width: wp('30%'),
        backgroundColor: theme.colors.black,
        marginEnd: 5,
        marginStart: 5,
        fontSize: 12,
        justifyContent:'center',
        paddingStart: 5,
        position:'absolute', left: 10, top: 120, right: 0, bottom: 0
    }}>
        {props.text}
    </Text>;
};

export default Chip;