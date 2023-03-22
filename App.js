import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumberButton from './src/NumberButton';
import OperationButton from './src/OperationButton';
import colors from './src/theme/colors';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.topView}>

			</View>
			<View style={styles.actionView}>
				<View style={styles.row}>
					<OperationButton operation={'c'} />
					<OperationButton operation={'x'} />
					<OperationButton operation={'%'} />
					<OperationButton operation={'/'} />
				</View>
				<View style={styles.row}>
					<NumberButton number={1} />
					<NumberButton number={2} />
					<NumberButton number={3} />
					<OperationButton operation={'*'} />
				</View>
				<View style={styles.row}>
					<NumberButton number={4}/>
					<NumberButton number={5}/>
					<NumberButton number={6}/>
					<OperationButton operation={'-'} />
				</View>
				<View style={styles.row}>
					<NumberButton number={7}/>
					<NumberButton number={8}/>
					<NumberButton number={9}/>
					<OperationButton operation={'+'} />
				</View>
				<View style={styles.row}>
					<NumberButton number={null}/>
					<NumberButton number={0}/>
					<NumberButton number={'.'}/>
					<OperationButton operation={'='} />
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
		borderBottomRightRadius: 10
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
