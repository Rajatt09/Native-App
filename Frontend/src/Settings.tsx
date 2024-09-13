import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PageTwo = () => {
  const handleLanguageSelection = (language: string) => {
    // Logic for handling language selection
    console.log(`Selected Language: ${language}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Language</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLanguageSelection('Hindi')}>
          <Text style={styles.buttonText}>Hindi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLanguageSelection('English')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    maxWidth: 400, // Optional: Limit the maximum width of the buttons container
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#00bcd4', // Primary button color
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for button
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PageTwo;
