import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from './types';

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
};

const HomeScreen: React.FC<HomePageProps> = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={{uri: 'https://example.com/background.jpg'}}
        style={styles.header}>
        <Text style={styles.title}>Sign Language Translator</Text>
        <Text style={styles.description}>
          Convert text and video to Indian Sign Language (ISL) and vice versa.
          Use the sections below to get started.
        </Text>
      </ImageBackground>

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
              style={[styles.button, styles.gradientButton]}
              onPress={() => navigation.navigate('PageOne')}>
              <Icon
                name="language"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Text to Sign Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.altButton]}
              onPress={() => navigation.navigate('PageThree')}>
              <Icon
                name="video-camera"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Video to Sign Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.infoButton]}
              // onPress={() => navigation.navigate('LearnISL')}
            >
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
    backgroundColor: '#1c1c1c', // Dark background with slight variation
  },
  contentContainer: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 10,
  },
  header: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.8)', // Transparent black over image
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#00e5ff', // Lighter accent color
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  description: {
    fontSize: 18,
    color: '#f5f5f5',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  section: {
    borderRadius: 15,
    padding: 25,
    marginVertical: 10,
    backgroundColor: '#2c2c2c', // A bit brighter dark color for contrast
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderColor: '#00e5ff',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#00e5ff',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#cccccc',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    elevation: 5,
  },
  gradientButton: {
    backgroundColor: 'linear-gradient(90deg, #00e5ff, #ff4081)',
    shadowColor: '#ff4081',
  },
  altButton: {
    backgroundColor: '#ff5722',
    shadowColor: '#ff5722',
  },
  infoButton: {
    backgroundColor: '#4caf50',
    shadowColor: '#4caf50',
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
