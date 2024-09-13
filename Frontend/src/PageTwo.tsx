import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const PageTwo = () => {
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Logic for converting ISL to text
    setTranslatedText('Translating ISL to text...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indian Sign Language (ISL) to Text</Text>
      <Button title="Translate ISL to Text" onPress={handleTranslate} />
      {translatedText ? (
        <Text style={styles.output}>{translatedText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  output: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default PageTwo;
