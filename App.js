import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberButton from './src/NumberButton';
import OperationButton from './src/OperationButton';
import colors from './src/theme/colors';

export default function App() {
	const [calcText, setCalcText] = useState('');
	const [result, setResult] = useState(0);
	const operations = ['+', '-', '*', '/', '%'];

	const getCalcText = (text) => {
		if (_checkIfLastCharIsOperation() && operations.includes(text)) {
			let cleanCalcText = _removeLastCharIfIsOperation();
			setCalcText(cleanCalcText + '' + text);
		}
		else {
			setCalcText(calcText + '' + text);
		}
	}

	const cleanScreen = () => {
		setCalcText('');
		setResult(0);
	}

	const calculation = () => {
		let cleanCalcText = _removeLastCharIfIsOperation();
		setResult(eval(cleanCalcText));
		setCalcText(cleanCalcText);
	}

	const del = () => {
		setCalcText(calcText.slice(0, calcText.length - 1));
	}

	const _getLastCaracter = () => {
		return calcText.slice(-1);
	}

	const _checkIfLastCharIsOperation = () => {
		let last = _getLastCaracter();
		if (operations.includes(last)) {
			return true;
		}
		return false;
	}

	const _removeLastCharIfIsOperation = () => {
		if (_checkIfLastCharIsOperation()) {
			return calcText.slice(0, calcText.length - 1);
		}
		return calcText;
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.topView}>
				<Text style={styles.textOperation}>
					{calcText}
				</Text>
				<Text style={styles.textResult}>{result}</Text>
			</View>
			<View style={styles.actionView}>
				<View style={styles.row}>
					<OperationButton operation={'C'} getCalcText={cleanScreen} />
					<OperationButton operation={'DE'} getCalcText={del} />
					<OperationButton operation={'%'} getCalcText={getCalcText} />
					<OperationButton operation={'/'} getCalcText={getCalcText} />
				</View>
				<View style={styles.row}>
					<NumberButton number={1} getCalcText={getCalcText} />
					<NumberButton number={2} getCalcText={getCalcText} />
					<NumberButton number={3} getCalcText={getCalcText} />
					<OperationButton operation={'*'} getCalcText={getCalcText} />
				</View>
				<View style={styles.row}>
					<NumberButton number={4} getCalcText={getCalcText} />
					<NumberButton number={5} getCalcText={getCalcText} />
					<NumberButton number={6} getCalcText={getCalcText} />
					<OperationButton operation={'-'} getCalcText={getCalcText} />
				</View>
				<View style={styles.row}>
					<NumberButton number={7} getCalcText={getCalcText} />
					<NumberButton number={8} getCalcText={getCalcText} />
					<NumberButton number={9} getCalcText={getCalcText} />
					<OperationButton operation={'+'} getCalcText={getCalcText} />
				</View>
				<View style={styles.row}>
					<NumberButton number={0} getCalcText={getCalcText} />
					<NumberButton number={'.'} getCalcText={getCalcText}/>
					<OperationButton operation={'='} getCalcText={calculation} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.PRIMARY,
		margin: 20
	},
	topView: {
		flex: 1,
		backgroundColor: colors.GRAY,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	textResult: {
		fontSize: 50,
		color: colors.LIGHT
	},
	textOperation: {
		fontSize: 30,
		color: colors.DARK
	},
	actionView: {
		flex: 2,
		marginTop: 20
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	}
});
