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
                                                      
export enum CardTextType {
    Caption,
    Description
}

type CardTextProps = {
    text?: string;
    cardTextType?: CardTextType
};

export const CardText = (props: CardTextProps) => {
    return <Text variant="body" style={{
        height: wp('10%'),
        width: wp('30%'),
        marginEnd: 5,
        marginStart: 5,
        fontSize: 12,
        paddingStart: 5,
        color: theme.colors.black,
        fontWeight: props.cardTextType === CardTextType.Caption ? 'bold' : 'normal',
        fontFamily: 'Cochin'
    }}>
        {props.text}
    </Text>;
};