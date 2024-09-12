import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PageThree = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Translate Video to Sign Language</Text>
        <Text style={styles.description}>
          Upload or record a video, and we will translate it into Indian Sign
          Language (ISL).
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            // Handle video upload
          }}>
          <Icon name="upload" size={22} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Upload Video</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.altButton]}
          onPress={() => {
            // Handle video record
          }}>
          <Icon
            name="video-camera"
            size={22}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Record Video</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Explore our platform to learn more about ISL translation and other
          features.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background to match PageOne
  },
  contentContainer: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 10, // Add extra padding for bottom bar
  },
  header: {
    padding: 20,
    backgroundColor: '#1f1f1f', // Darker background for header
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bcd4', // Primary button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    justifyContent: 'center',
    elevation: 5,
  },
  altButton: {
    backgroundColor: '#007bff', // Alternative button color
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
  footerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});

export default PageThree;
