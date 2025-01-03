import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen({ navigate, alarm, gameSolved, setGameSolved }) {
  const { hour = '00', minute = '00' } = alarm || {}; // Safe destructuring with default values

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours().toString().padStart(2, '0');
      const currentMinute = now.getMinutes().toString().padStart(2, '0');

      if (!gameSolved && currentHour === hour && currentMinute === minute) {
        clearInterval(interval);
        Alert.alert('Alarm Ringing', 'Solve the game to stop the alarm!', [
          {
            text: 'OK',
            onPress: () => {
              setGameSolved(true); // Mark the game as solved
              navigate('Game'); // Navigate to the game screen
            },
          },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hour, minute, gameSolved, navigate, setGameSolved]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../background.jpeg')} // Replace with your background image path
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>TickTockTask</Text>
        <Text style={styles.subtitle}>A procrastinator's alarm</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('AddAlarm')}
        >
          <Text style={styles.buttonText}>Set Alarm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 50, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', 
    marginBottom: 20,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18, 
    fontWeight: '600', 
    textAlign: 'center',
    color: 'white', 
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF1493',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
