import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Animated,
} from 'react-native';
// import {Camera} from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

const PageFour = () => {
  //   const {conversionType} = route.params; // Get the conversion type ('text' or 'audio') from PageThree
  const [hasPermission, setHasPermission] = useState(null);
  //   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      //   const {status} = await Camera.requestPermissionsAsync();
      //   setHasPermission(status === 'granted');
    })();
  }, []);

  //   const handleRecordVideo = async () => {
  //     if (cameraRef.current) {
  //       if (isRecording) {
  //         cameraRef.current.stopRecording();
  //       } else {
  //         const video = await cameraRef.current.recordAsync();
  //         setVideoUri(video.uri);
  //         setIsRecording(false);
  //       }
  //     }
  //   };

  //   const handleStopRecording = () => {
  //     setIsRecording(false);
  //     cameraRef.current.stopRecording();
  //   };

  const handleConvert = () => {
    // if (conversionType === 'text') {
    //   // Logic to convert video to text
    //   //   alert('Converting video to text...');
    // } else if (conversionType === 'audio') {
    //   // Logic to extract audio from video
    //   //   alert('Converting video to audio...');
    // }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {/* <Camera
          ref={cameraRef}
          style={styles.camera}
          type={cameraType}
          ratio="16:9"
        /> */}
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          //   onPress={() =>
          //     setCameraType(
          //       cameraType === Camera.Constants.Type.back
          //         ? Camera.Constants.Type.front
          //         : Camera.Constants.Type.back,
          //     )
          //   }
        >
          <Icon name="exchange" size={22} color="#fff" />
          <Text style={styles.buttonText}>Flip Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isRecording ? styles.recordingButton : null]}
          //   onPress={handleRecordVideo}
        >
          <Icon name="video-camera" size={22} color="#fff" />
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Record Video'}
          </Text>
        </TouchableOpacity>

        {videoUri && (
          <TouchableOpacity
            style={styles.convertButton}
            onPress={handleConvert}>
            <Icon name="exchange" size={22} color="#fff" />
            <Text style={styles.buttonText}>
              {/* Convert to {conversionType === 'text' ? 'Text' : 'Audio'} */}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {videoUri
            ? 'Video captured. Ready to convert.'
            : 'Capture a video to start conversion.'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  camera: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  controls: {
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bcd4', // Button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 5, // Button shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  recordingButton: {
    backgroundColor: '#d32f2f', // Red when recording
  },
  convertButton: {
    backgroundColor: '#00bcd4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
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

export default PageFour;
