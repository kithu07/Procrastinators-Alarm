import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [alarms, setAlarms] = useState([]);

  const addAlarm = (newAlarm) => {
    setAlarms([...alarms, newAlarm]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procrastinator's Alarm</Text>
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.alarmCard}>
            <Text>{item.time}</Text>
            <Text>Difficulty: {item.difficulty}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add Alarm', { addAlarm })}
      >
        <Text style={styles.addButtonText}>+ Add Alarm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { fontSize: 24, color: '#FF1493', marginBottom: 20 },
  alarmCard: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#FF1493',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: { color: '#fff', fontSize: 16 },
});

export default HomeScreen;
