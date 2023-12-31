import React from 'react';

import {
	View, Image
} from 'react-native';

const TabIcon = ({ focused, icon }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				height: 80,
				width: 50
			}}
		>
			<Image
				source={icon}
				resizeMode='contain'
				style={{
					width: 30,
					height: 30,
					tintColor: focused ? 'darkgreen' : 'rgb(203, 203, 203)'
				}}
			/>

			{focused &&
				<View
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
						height: 5,
						borderTopLeftRadius: 2,
						borderTopRightRadius: 2,
						backgroundColor: 'darkgreen'
					}}
				/>
			}	

		</View>
	)
}

export default TabIcon;