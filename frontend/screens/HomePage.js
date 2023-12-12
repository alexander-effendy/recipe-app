import { 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	FlatList, 
	TextInput, 
	SafeAreaView, 
	ScrollView, 
	TouchableOpacity, 
	Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

const Home = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.main}>
			<FlatList 
				
			/>
		</SafeAreaView>
		
	)
}

export default Home;

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
