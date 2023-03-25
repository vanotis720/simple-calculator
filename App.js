import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberButton from './src/NumberButton';
import OperationButton from './src/OperationButton';
import colors from './src/theme/colors';

export default function App() {
	const [firstNumber, setFirstNumber] = useState(null);
	const [secondNumber, setSecondNumber] = useState(null);
	const [operation, setOperation] = useState(null);
	const [result, setResult] = useState(0);

	const showActualOperation = () => {
		if(firstNumber) {
			if(operation) {
				if(secondNumber) {
					return firstNumber + '' + operation + '' +secondNumber;
				}
				else {
					return firstNumber + '' + operation;
				}
			}
			else {
				return firstNumber;
			}
		}
	}

	const getNumber = (number) => {
		if(operation) {
			setSecondNumber((secondNumber ?? '') + '' + number) ;
		}
		else {
			setFirstNumber((firstNumber ?? '') + '' + number);
		}
	}

	const cleanScreen = () => {
		setOperation(null);
		setFirstNumber(null);
		setSecondNumber(null);
	}

	const calculation = () => {
		setResult(eval(firstNumber + operation + secondNumber));
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.topView}>
				<Text style={styles.textOperation}>
					{ showActualOperation() }
				</Text>
				<Text style={styles.textResult}>={result}</Text>
			</View>
			<View style={styles.actionView}>
				<View style={styles.row}>
					<OperationButton operation={'C'} setOperation={cleanScreen}/>
					<OperationButton operation={'DE'} />
					<OperationButton operation={'%'} setOperation={setOperation}/>
					<OperationButton operation={'/'} setOperation={setOperation}/>
				</View>
				<View style={styles.row}>
					<NumberButton number={1} getNumber={getNumber} />
					<NumberButton number={2} getNumber={getNumber} />
					<NumberButton number={3} getNumber={getNumber} />
					<OperationButton operation={'*'} setOperation={setOperation} />
				</View>
				<View style={styles.row}>
					<NumberButton number={4} getNumber={getNumber} />
					<NumberButton number={5} getNumber={getNumber} />
					<NumberButton number={6} getNumber={getNumber} />
					<OperationButton operation={'-'} setOperation={setOperation}/>
				</View>
				<View style={styles.row}>
					<NumberButton number={7} getNumber={getNumber} />
					<NumberButton number={8} getNumber={getNumber} />
					<NumberButton number={9} getNumber={getNumber} />
					<OperationButton operation={'+'} setOperation={setOperation}/>
				</View>
				<View style={styles.row}>
					<NumberButton number={null} />
					<NumberButton number={0} getNumber={getNumber}/>
					<NumberButton number={'.'} />
					<OperationButton operation={'='} setOperation={calculation}/>
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
