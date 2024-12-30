import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Audio } from 'expo-av';

const GameScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    playAlarm();
    generateQuestion();
    return () => {
      stopAlarm();
    };
  }, []);

  const playAlarm = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../alarm.mp3'), // Add a suitable alarm sound in assets folder
      { shouldPlay: true, isLooping: true }
    );
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  };

  const stopAlarm = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setIsPlaying(false);
    }
  };

  const generateQuestion = () => {
    // A simple trivia game example
    const trivia = [
      { question: 'What is 5 + 3?', options: ['6', '8', '9', '7'], answer: '8' },
      { question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Rome', 'Madrid'], answer: 'Paris' },
      { question: 'What is 10 * 2?', options: ['20', '25', '15', '30'], answer: '20' },
    ];
    const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];
    setQuestion(randomTrivia.question);
    setOptions(randomTrivia.options);
    setAnswer(randomTrivia.answer);
  };

  const checkAnswer = (selectedOption) => {
    setUserAnswer(selectedOption);
    if (selectedOption === answer) {
      Alert.alert('Correct!', 'You’ve stopped the alarm!', [
        {
          text: 'OK',
          onPress: () => {
            stopAlarm();
            navigation.navigate('Home');
          },
        },
      ]);
    } else {
      Alert.alert('Wrong Answer!', 'Try again.');
      generateQuestion(); // Generate a new question for retry
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solve to Stop the Alarm</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => checkAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FF4081',
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#FF4081',
  },
});

export default GameScreen;
