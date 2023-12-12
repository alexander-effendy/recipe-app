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
	Button,
	StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import SearchIcon from '../assets/search.png'

const Home = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			{/* header section */}
			<View style={styles.search}>
				<Text style={styles.welcome}>Hello Alex,</Text>
				<Text style={styles.whatToCook}>What do you want to cook today?</Text>
				<View style={styles.searchBar}>
					<View style={styles.imageContainer}>
						<Image
							source={SearchIcon} 
							style={styles.searchIcon} />
						
					</View>
					<TextInput placeholder='search recipe' style={styles.input}></TextInput>
				
				</View>
				
			</View>
			{/* Main section */}
			<View style={styles.content}>

			</View>
		</SafeAreaView>
		
	)
}

export default Home;

const styles = StyleSheet.create({
  container: {
		display: 'flex',
	},
	search: {
		height: '20%',
		padding: 20
	},
	welcome: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'rgb(0, 153, 76)',
		marginBottom: 5
	},
	whatToCook: {
		fontSize: 15,
		color: 'grey',
		marginBottom: 15
	},
	searchBar: {
		backgroundColor: 'rgb(230, 230, 230)',
		borderRadius: 10,
		height: '45%',
		display: 'flex',
		flexDirection: 'row',
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchIcon: {
		tintColor: 'grey',
		width: 30,
		height: 30
	},
	input: {
		flex: 6.5,
		padding: 5,
		fontSize: 16,
		color: 'grey'
	},
	content: {
		height: '80%',
		backgroundColor: 'yellow'
	}
});
