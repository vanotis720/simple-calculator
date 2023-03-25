import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "./theme/colors";
import metrics from "./theme/metrics";

export default function OperationButton(props) {

    const { operation, getCalcText } = props;
    const backgroundColor = (operation == '=') ? colors.LIGHT : colors.SECONDARY;
    const width = (operation == '=') ? (metrics.screenWidth / 2) - 30 : (metrics.screenWidth / 4) - 30;

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: backgroundColor, width: width }]}
            onPress={() => getCalcText(operation)}
        >
            <Text style={styles.text}>{operation}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: (metrics.screenWidth / 4) - 30,
        height: (metrics.screenWidth / 4) - 35,
        borderRadius: metrics.screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 26,
        fontWeight: '400',
        color: colors.GRAY
    }
});