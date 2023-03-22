import { Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width,
    screenHeight: height,
    statusbar: StatusBar.currentHeight || 24
};

export default metrics;