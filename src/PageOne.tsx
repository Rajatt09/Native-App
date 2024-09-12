import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PageOne = () => {
  const [text, setText] = useState('');

  const handleConvert = () => {
    // Logic for converting text to ISL
    // alert('Convert function will be implemented here.');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Text to Indian Sign Language (ISL)</Text>
        <Text style={styles.description}>
          Enter the text you want to convert into Indian Sign Language (ISL).
          Use the button below to perform the conversion.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your text here..."
          placeholderTextColor="#9e9e9e"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleConvert();
          }}>
          <Icon name="exchange" size={22} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Convert to ISL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Discover more about our platform and explore the features designed to
          assist you.
        </Text>
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
  input: {
    width: '100%',
    borderColor: '#ddd', // Light border color
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#424242', // Darker text color for input
    backgroundColor: '#ffffff', // White background for input field
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bcd4', // Primary button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 5, // Shadow for button
    // transform: [{ scale: scaleAnim }], // Animated scale
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

export default PageOne;
