import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
    image: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
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
        backgroundColor: '#DDDDDD',
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
        flexWrap: "wrap",
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        height: 150,
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: 5,
        backgroundColor: '#55DAB8',
        borderWidth: 1.5,
        borderColor: "#fff"
    }
});