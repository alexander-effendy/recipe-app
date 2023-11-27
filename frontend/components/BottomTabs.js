import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from '@iconify/react';



import Home from '../screens/HomePage';
import Recipe from '../screens/RecipePage';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<Tabs.Navigator 
			screenOptions={{ 
				headerShown: true,
				tabBarStyle: {
					backgroundColor: 'rgb(46,46,46)',
					paddingTop: 10,
				},
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'white', 
				headerStyle: {
					backgroundColor: 'rgb(46,46,46)',
					shadowColor: 'transparent', // Remove shadow on iOS
				},
				headerTintColor: 'white',
        }}>

				<Tabs.Screen
					name='Home'
					component={Home}
					options={{
						tabBarIcon: ({ size }) => (
							<Ionicons name="md-home-outline" size={size} color="white" />
						),
						
					}}
				>
				</Tabs.Screen>

				<Tabs.Screen
					name='Recipe'
					component={Recipe}
					options={{
						tabBarIcon: ({ size }) => (
							<Ionicons
								name='md-fast-food-outline' size={size} color='white'
							/>
						),
					}}
				></Tabs.Screen>
      </Tabs.Navigator>
	)
}

export default BottomTabs;