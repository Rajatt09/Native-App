import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VideoToSign: React.FC = () => {
  const [isTextMode, setIsTextMode] = useState(true);
  const [dotAnimation] = useState(new Animated.Value(0));

  // Start dot animation for zigzag effect
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotAnimation, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnimation, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [dotAnimation]);

  // Zigzag motion for dots
  const getDotStyle = (offset: number) => ({
    transform: [
      {
        translateY: dotAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, offset],
        }),
      },
    ],
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Video Conversion</Text>
        <Text style={styles.subtitle}>
          Choose between text or audio conversion
        </Text>
      </View>

      {/* Switch buttons */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, isTextMode ? styles.activeButton : null]}
          onPress={() => setIsTextMode(true)}>
          <Text style={styles.switchButtonText}>Video to Text</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.switchButton,
            !isTextMode ? styles.activeButton : null,
          ]}
          onPress={() => setIsTextMode(false)}>
          <Text style={styles.switchButtonText}>Video to Audio</Text>
        </TouchableOpacity>
      </View>

      {/* Video and Conversion Section */}
      <View style={styles.mainContent}>
        {/* Video Section */}
        <View style={styles.videoContainer}>
          <Text style={styles.videoPlaceholder}>[ Video Placeholder ]</Text>
        </View>

        {/* Conversion Section */}
        <View style={styles.sectionContainer}>
          {isTextMode ? (
            <View style={styles.content}>
              {/* Converted Text Display */}
              <Text style={styles.convertedText}>
                Your converted text will appear here...
              </Text>

              {/* Zigzag loading dots */}
              <View style={styles.dotContainer}>
                <Animated.View style={[styles.dot, getDotStyle(-8)]} />
                <Animated.View style={[styles.dot, getDotStyle(8)]} />
                <Animated.View style={[styles.dot, getDotStyle(-8)]} />
              </View>
            </View>
          ) : (
            <View style={styles.content}>
              {/* Audio Section */}
              <View style={styles.audioContainer}>
                <Icon name="volume-up" size={60} color="#00bcd4" />
                <View style={styles.signalLine} />
                {/* <View style={styles.audioBox}>
                  <Text style={styles.audioPlaceholder}>
                    Audio will be played here.
                  </Text>
                </View> */}
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Footer */}
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
    backgroundColor: '#121212',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2f2f2f',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#00bcd4',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 10,
    textAlign: 'center',
  },
  mainContent: {
    flexDirection: 'column',
  },
  videoContainer: {
    height: 300,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
  },
  videoPlaceholder: {
    color: '#e0e0e0',
    fontSize: 18,
  },
  sectionContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  convertedText: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 15,
    height: 15,
    backgroundColor: '#00bcd4',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signalLine: {
    width: 150, // Line representing the strength
    height: 6,
    borderRadius: '120px',
    backgroundColor: '#00bcd4',
    marginHorizontal: 15,
  },
  audioBox: {
    width: '70%',
    backgroundColor: '#2f2f2f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  audioPlaceholder: {
    color: '#e0e0e0',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  switchButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#1f1f1f',
    borderWidth: 1,
  },
  activeButton: {
    backgroundColor: '#00bcd4',
  },
  switchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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

export default VideoToSign;
