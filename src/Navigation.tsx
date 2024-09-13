import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomeScreen';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree'; // New page
import Icon from 'react-native-vector-icons/FontAwesome';
import PageFour from './PageFour';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PageFour}
          // options={{title: 'Welcome'}}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'PageOne') {
              iconName = 'list';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            } else if (route.name === 'PageThree') {
              iconName = 'video-camera';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00bcd4', // Teal for active tabs
          tabBarInactiveTintColor: '#9e9e9e', // Light gray for inactive tabs
          tabBarStyle: {
            backgroundColor: '#1c1c1e', // Dark background for tab bar
            borderTopColor: '#333', // Darker border for separation
            borderTopWidth: 1,
            paddingVertical: 5,
            height: 60,
            borderRadius: 0, // Rounded corners
            overflow: 'hidden', // Ensure rounded corners are applied
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          headerStyle: {
            backgroundColor: '#00bcd4', // Background color for the header
          },
          headerTintColor: '#ecf0f1', // Color for the header text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="PageOne"
          component={PageOne}
          options={{title: 'Translate Text'}}
        />
        <Tab.Screen
          name="PageThree"
          component={PageThree}
          options={{title: 'Translate Video'}}
        />
        {/* <Tab.Screen
          name="PageFour"
          component={PageFour}
          options={{title: 'Video'}}
        /> */}
        <Tab.Screen
          name="Settings"
          component={PageTwo}
          options={{title: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
