import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Platform,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from './types';

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
};

const HomeScreen: React.FC<HomePageProps> = ({navigation}) => {
  // Animation state for button press
  const [scaleAnim] = React.useState(new Animated.Value(1));

  const animateButton = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1.1,
        friction: 2,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Language Translator</Text>
        <Text style={styles.description}>
          Convert text and video to Indian Sign Language (ISL) and vice versa.
          Use the sections below to get started.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <Text style={styles.sectionContent}>
            Explore our services and features designed to help you translate
            between text, video, and sign language.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, {transform: [{scale: scaleAnim}]}]}
              onPress={() => {
                animateButton();
                navigation.navigate('PageOne');
              }}>
              <Icon
                name="language"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Text to Sign Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                styles.altButton,
                {transform: [{scale: scaleAnim}]},
              ]}
              onPress={() => {
                animateButton();
                navigation.navigate('PageThree');
              }}>
              <Icon
                name="video-camera"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Video to Sign Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                styles.infoButton,
                {transform: [{scale: scaleAnim}]},
              ]}
              onPress={() => {
                animateButton();
                // Navigate to Learn About ISL
              }}>
              <Icon
                name="info-circle"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Learn About ISL</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <Text style={styles.sectionContent}>
            For any queries or feedback, please reach out to us. We're here to
            assist you with anything you need.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  contentContainer: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 10, // Extra padding for bottom bar
  },
  header: {
    padding: 20,
    backgroundColor: '#1f1f1f', // Darker background for header
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#00bcd4', // Accent color
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#e0e0e0', // Light gray
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  sectionContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  section: {
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    borderColor: '#00bcd4',
    borderWidth: 2,
    backgroundColor: '#1e1e1e', // Slightly lighter dark background
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#00bcd4',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bcd4', // Primary button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '90%',
    justifyContent: 'center',
    elevation: 5, // Shadow for button
  },
  altButton: {
    backgroundColor: '#ff5722', // Alternate button color
  },
  infoButton: {
    backgroundColor: '#4caf50', // Info button color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  icon: {
    marginRight: 12,
  },
});

export default HomeScreen;
