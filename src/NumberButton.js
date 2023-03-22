import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import colors from "./theme/colors";
import metrics from "./theme/metrics";

export default function  NumberButton(props) {

    const {number} = props;
    const backgroundColor = number != null ? colors.GRAY : colors.PRIMARY;

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Text style={styles.text}>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: (metrics.screenWidth / 4) - 30,
        height: (metrics.screenWidth / 4) - 30,
        borderRadius: metrics.screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 26,
        fontWeight: '400',
        color: colors.DARK
    }
});