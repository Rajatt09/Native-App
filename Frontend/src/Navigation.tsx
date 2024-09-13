import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './HomeScreen'; // Your home screen component
import TextToVideo from './TextToVideo'; // Other screens
import PageTwo from './Settings';
import VideoToSign from './VideoToSign';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon
import {View, StyleSheet} from 'react-native'; // Import View and StyleSheet

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00bcd4', // Background color for the header
          },
          headerTintColor: '#ecf0f1', // Color for the header text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({navigation}) => ({
            title: 'Home',
            headerRight: () => (
              <View style={styles.iconContainer}>
                <Icon
                  name="cog"
                  size={24}
                  color="#ecf0f1"
                  onPress={() => navigation.navigate('PageTwo')} // Navigate to Settings page
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="PageOne"
          component={TextToVideo}
          options={{title: 'Translate To ISL'}}
        />
        <Stack.Screen
          name="PageTwo"
          component={PageTwo}
          options={{title: 'Settings'}}
        />
        <Stack.Screen
          name="PageThree"
          component={VideoToSign}
          options={{title: 'Translate Video'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define styles for the icon container
const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 0, // Adjust margin from the right
    marginTop: 0, // Adjust margin from the top
  },
});

export default MyStack;
