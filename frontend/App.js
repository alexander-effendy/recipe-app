import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


// npm i's
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import components
import BottomTabs from './components/BottomTabs';

// import screens
import Login from './screens/LoginPage';
import SignUp from './screens/SignUpPage';

// callbacks
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <NavigationContainer>
      {isLogin ? (
          <Stack.Navigator>
            <Stack.Screen
              name="HomePage"
              component={BottomTabs}
              options={{
                headerStyle: {
                  backgroundColor: 'rgb(46,46,46)',
                },
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
