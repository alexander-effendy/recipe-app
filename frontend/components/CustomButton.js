import React from 'react';
import {
	TouchableOpacity,
	Text
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }) => {
	
	if (colors.length > 0) {
		return (
			<TouchableOpacity
				onPress={onPress}
			>
				<LinearGradient
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					colors={colors}
					style={{
						...buttonContainerStyle
					}}
				>
					<Text
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: 20,
						fontWeight: 'bold'
					}}
				>
					{buttonText}
				</Text>

				</LinearGradient>
				
			</TouchableOpacity>
		)
	} else {
		return (
			<TouchableOpacity
				style={{
					...buttonContainerStyle
				}}
				onPress={onPress}
			>
				<Text
					style={{
						textAlign: 'center',
						color: 'green',
						fontSize: 20,
						fontWeight: 'bold'
					}}
				>
					{buttonText}
				</Text>
			</TouchableOpacity>
		)
	}
	
}

export default CustomButton;
