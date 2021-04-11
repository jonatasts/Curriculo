import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#22272E',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    image: {
        marginTop: 120,
        width: 190,
        height: 190,
        borderRadius: 125,
        marginBottom: 12,
    },

    icon: {
        color: '#FFF',
        textAlign: 'center',
        marginHorizontal: 12,
        marginTop: 10,
    },

    icon_github: {
        marginTop: 8,
    },

    icons: {
        flexDirection: 'row',
    },

    name: {
        color: '#FFF',
        fontSize: 26,
        marginTop: 11,
        textAlign: 'center',
    },

    work: {
        color: '#FFF',
        marginBottom: 11,
        textAlign: 'center',
    }

});

export default styles;