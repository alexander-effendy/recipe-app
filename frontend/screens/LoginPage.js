import React, { useState, useEffect } from 'react';
import { View, 
	TextInput, 
	Button, 
	StyleSheet, 
	TouchableOpacity, 
	Text,
	StatusBar,
	ImageBackground, Animated, Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import pizza from '../assets/pizza2.jpg';

import CustomButton from '../components/CustomButton';

const LoginPage = () => {
	const [fadeAnim] = useState(new Animated.Value(0));

	const [loginModal, setLoginModal] = useState(false);
	const [signUpModal, setSignUpModal] = useState(false);

	useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1, // Fade to opacity 1
        duration: 2000, // Duration of the animation
        useNativeDriver: true // Use native driver for better performance
      }
    ).start();
  }, [fadeAnim]);

	const renderHeader = () => {
		return (
			<View
				style={{
					height: '62%',
				}}
			>
				<ImageBackground
					source={pizza}
					style={{
						flex: 1,
						justifyContent: 'flex-end'
					}}
					resizeMode="cover"
				>
					{/* put gradient inside the image background */}
					<LinearGradient
						start={{ x:0, y: 0 }}
						end={{ x: 0, y: 1 }}
						colors={['transparent', 'black']}
						style={{
							height: 200,
							justifyContent: 'flex-end',
							paddingHorizontal: 20
						}}
					>
						<Text
							style={{
								width: '80%',
								color: 'white',
								fontSize: 40,
								lineHeight: 45,
								fontWeight: 'bold'
							}}
						>
							Cina Medan suka makan Pizza
						</Text>
					</LinearGradient>
				</ImageBackground>
			</View>
		)
	}

	const renderDetails = () => {
		return (
			<View
				style={{
					flex: 1,
					paddingHorizontal: 20
				}}
			>
				<Text
					style={{
						color: 'gray',
						width: '60%',
						marginTop: 20,
						fontSize: 15
					}}
				>
					Makan pizza pake 1200 bumbu merica sambal biru otewe BPK sagoli Medan enak</Text>

				{/* Buttons */}
				<View style={{ flex: 1, marginTop: 30 }}>
					<CustomButton 
						buttonText="Login"
						buttonContainerStyle={{
							paddingVertical: 18,
							borderRadius: 20,
						}}
						colors={['green', 'lightgreen']}
						onPress={navigateToHome}
					/>
					<CustomButton 
						buttonText="Signup"
						buttonContainerStyle={{
							marginTop: 20,
							paddingVertical: 18,
							borderRadius: 20,
							borderColor: 'darkgreen',
							borderWidth: 1
						}}
						colors={[]}
						onPress={navigateToHome}
					/>
				</View>
			</View>
		)
	}

	const navigateToHome = () => {
		navigation.navigate('Home');
	}

	const navigation = useNavigation();

  return (
    <Animated.View style={{
			flex: 1,
			backgroundColor: 'black'
		}}>

			<StatusBar barStyle='light-content'></StatusBar>
			{renderHeader()}
			{renderDetails()}
			
		</Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
	register: {
		fontSize: 10,
	}
});

export default LoginPage;
