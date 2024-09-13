import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextToVideo = () => {
  const [activeTab, setActiveTab] = useState('text'); // 'text' or 'voice'
  const [text, setText] = useState('');

  const handleConvert = () => {
    // Logic for converting text to ISL
    // alert('Convert function will be implemented here.');
  };

  const handleVoiceCapture = () => {
    // Logic for capturing voice
    // alert('Voice capture function will be implemented here.');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'text' && styles.activeTab]}
            onPress={() => setActiveTab('text')}>
            <Text style={styles.tabText}>Text to ISL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'voice' && styles.activeTab]}
            onPress={() => setActiveTab('voice')}>
            <Text style={styles.tabText}>Voice to ISL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.videoBox}>
          <Icon name="video-camera" size={50} color="#9e9e9e" />
          <Text style={styles.videoText}>No Video</Text>
        </View>
        {activeTab === 'text' && (
          <View style={styles.sectionContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your text here..."
              placeholderTextColor="#9e9e9e"
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity style={styles.button} onPress={handleConvert}>
              <Icon
                name="exchange"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Convert to ISL</Text>
            </TouchableOpacity>
          </View>
        )}
        {activeTab === 'voice' && (
          <View style={styles.sectionContainer}>
            <View style={styles.signalStrengthContainer}>
              <Text style={styles.buttonText}>Signal strength :</Text>
              <View style={styles.signalStrengthLine} />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleVoiceCapture}>
              <Icon name="microphone" size={22} color="#fff" />
              <Text style={styles.buttonText}>Capture Voice</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Discover more about our platform and explore the features designed
            to assist you.
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
    paddingBottom: Platform.OS === 'ios' ? 40 : 10, // Add extra padding for bottom bar
  },
  header: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#00bcd4', // Accent color for active tab
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  videoBox: {
    width: '100%',
    height: 400,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    position: 'relative', // Position relative to allow absolute positioning of the cross icon
  },
  videoText: {
    color: '#9e9e9e',
    fontSize: 16,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    minWidth: '100%',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bcd4', // Primary button color
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 5, // Shadow for button
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
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
  signalStrengthContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    minWidth: '100%',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signalStrengthLine: {
    width: '40%',
    height: 10,
    backgroundColor: '#00bcd4', // Signal strength color
    borderRadius: 5,
  },
});

export default TextToVideo;
