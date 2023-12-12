import { StyleSheet, Text, View } from 'react-native';

const Recipe = () => {
	return (
		<View style={styles.main}>
			<Text>This is Recipes Page!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  main: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollView: {
    width: '100%',
		padding: 10,
  },
	cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
	cardStyle: {
    width: '48%',
  },
});

export default Recipe;