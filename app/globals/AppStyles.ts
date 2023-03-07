import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme, darkTheme, Theme } from '../globals/Theme';

export const appStyles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
    image: {
        width: wp('45%'),
        height:  hp('25%'),
        borderRadius: 150 / 8,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: theme.colors.background
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        padding: 10,
        marginBottom: 10
    },
    baseText: {
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
    },
    app: {
        marginHorizontal: "auto",
        flexDirection: "row",
        flexWrap: "nowrap",
        width: wp('50%'),
        margin: 10
    },
    item: {
        flex: 1,
        width: wp('50%'),
        flexDirection: 'column',
        height: hp('40%'),
        justifyContent: "space-around",
        alignItems: 'baseline',
        padding: 5,
        backgroundColor:theme.colors.background,
        borderWidth: 1.5,
        borderColor: theme.colors.cardPrimaryBackground,
        flexWrap:'nowrap'
    }
});