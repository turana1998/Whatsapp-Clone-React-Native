import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer: {
       justifyContent:'space-around'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    content: {
        fontSize: 16,
        color: 'grey',
        width:"100%",
        
    },
    time: {
        fontSize: 14,
        color: 'grey'
    }
});

export default styles;