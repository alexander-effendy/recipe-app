import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/HomePage';
import Recipe from '../screens/RecipePage';
import TabIcon from './TabIcon';

import HomeIcon from '../assets/home.png';
import SearchIcon from '../assets/search.png'
import BookmarkIcon from '../assets/bookmark.png'
import SettingIcon from '../assets/setting.png'

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		(
			<Tabs.Navigator 
				screenOptions={{
					headerShown: false, // If you want to hide the header
					tabBarShowLabel: false,
					tabBarStyle: {
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						elevation: 0,
						backgroundColor: 'white', // Set your background color here
						borderTopColor: 'transparent',
						height: 100,
					}
				}}
			>
				<Tabs.Screen
					name='Home'
					component={Home}
					options={{
						tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={HomeIcon} />
					}}
				/>
				<Tabs.Screen
					name='Recipe'
					component={Recipe}
					options={{
						tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={SearchIcon} />
					}}
				/>
				<Tabs.Screen
					name='Search'
					component={Recipe}
					options={{
						tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={BookmarkIcon} />
					}}
				/>
				<Tabs.Screen
					name='Bookmark'
					component={Recipe}
					options={{
						tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={SettingIcon} />
					}}
				/>
      </Tabs.Navigator>
		)
	)
}

export default BottomTabs;