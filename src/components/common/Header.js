//Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        elevation: 4,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#000'
    }
};
//Make the component available t other part of the app
export { Header };
