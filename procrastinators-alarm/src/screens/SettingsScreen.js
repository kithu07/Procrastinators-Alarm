import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigate }) => {
  const dummyOptions = [
    { id: 1, label: 'Change Alarm Tone' },
    { id: 2, label: 'Enable Vibration' },
    { id: 3, label: 'Set Default Alarm Time' },
    { id: 4, label: 'Change Theme (Dark/Light)' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {dummyOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.optionButton}>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.backButton} onPress={() => navigate('Home')}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
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
    color: '#FFF',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#FFF',
  },
  backButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
  },
  backButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default SettingsScreen;
